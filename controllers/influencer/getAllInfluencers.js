const mongoose=require('mongoose')

const Influencers = require('../../models/influencerModel')

const getAllInfluencers=async(req,res)=>{
    try {
        const allInfluencers = await Influencers.find(); // Corrected method
        res.status(200).json(allInfluencers);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching influencers', error: err });
    }
}

const getInfluencer = async (req, res) => {
    try {
        const influencerId = req.headers["influencer_id"];
        const influencer = await Influencers.findById(influencerId); // find by ID
        if (!influencer) {
            return res.status(404).json({ message: 'Influencer not found' });
        }
        res.json(influencer); // Send the found influencer as response
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error fetching influencer', error: err });
    }
};


const getInfluencerIdFromUsername = async(req,res)=>{
    try{

      const influencer_username = req.headers["influencerusername"]
      // console.log("Username:",influencer_username)
      const influencer = await Influencers.findOne({username:influencer_username})
      if (!influencer) {
        return res.status(404).json({ message: 'Influencer not found' });
      }

      // console.log(influencer._id)
      res.json({
        influencer_id: influencer._id,
        profile_photo_url: influencer.profile_photo_url,
        platform: influencer.platform,
      });

    }
    catch(err)
    {
      console.log(err)
      res.status(500).json({message:'Error getting Influencer Id from influencer username:',error:err})
    }
}


const getInfluencersCategoryWise = async (req, res) => {
    const { category, searchText } = req.body;
    console.log("Bk:", category);

    let filt_influencers = [];

    try {
      if (category) {
        // Filter by category
        filt_influencers = await Influencers.find({ niche: category });
      } else if (searchText) {
        // Filter by username using regex for case-insensitive partial matches
        filt_influencers = await Influencers.find({
          username: { $regex: searchText, $options: 'i' },
        });
      } else {
        // If no filters are provided, return all influencers
        filt_influencers = await Influencers.find();
      }

      console.log("All Filtered Influencers:", filt_influencers);
      res.status(200).json(filt_influencers);
    } catch (err) {
      console.error("Error fetching influencers:", err);
      res.status(500).json({ message: 'Error fetching influencers', error: err });
    }
  };



module.exports={getAllInfluencers,getInfluencer,getInfluencersCategoryWise,getInfluencerIdFromUsername};
