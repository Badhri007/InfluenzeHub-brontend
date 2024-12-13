const mongoose = require('mongoose')

const {Campaigns}=require('../../models/campaignModel')

const getAllCampaignsSponsorWise=async(req,res)=>{
    const sponsorId = req.headers['sponsorid'];
    console.log("Sponsor ID:", sponsorId);

    if (!sponsorId) {
        return res.status(400).json({ error: 'Sponsor ID is required' });
    }
    let objectId;
    if (mongoose.Types.ObjectId.isValid(sponsorId)) {
        objectId = new mongoose.Types.ObjectId(sponsorId);
    } else {
        return res.status(400).json({ error: 'Invalid User ID format' });
    }

    const userCampaigns=await Campaigns.find({sponsorId:sponsorId});
    console.log("User campaigns:",userCampaigns);
    res.json(userCampaigns);
}


const getParticularCampaign=async(req,res)=>{
    
    const campaignid = req.headers['campaignid'];
    console.log("Campaign_id:",campaignid)
    const currentCampaign=await Campaigns.find({_id:campaignid});
    console.log("Current Campaign:",currentCampaign);
    res.json(currentCampaign);
}



// const getCampaignsCategoryWise=async(req,res)=>{
//     const {category,searchText} = req.body;
//     console.log("Bk:",category);

//     const filt_campaigns=await Campaigns.find({niche:category});
//     console.log("All Filtered Campaigns:",filt_campaigns);
//     res.json(filt_campaigns);

// }

const getCampaignsCategoryWise = async (req, res) => {
    const { category, searchText } = req.body;
    console.log("Bk:", category);
  
    let filt_campaigns = [];
  
    try {
      if (category) {
        // Filter by category
        filt_campaigns = await Campaigns.find({ niche: category });
      } else if (searchText) {
        // Filter by username using regex for case-insensitive partial matches
        filt_campaigns = await Campaigns.find({
          name: { $regex: searchText, $options: 'i' },
        });
      } else {
        // If no filters are provided, return all campaigns
        filt_campaigns = await Campaigns.find();
      }
  
      console.log("All Filtered Campaigns:", filt_campaigns);
      res.status(200).json(filt_campaigns);
    } catch (err) {
      console.error("Error fetching campaigns:", err);
      res.status(500).json({ message: 'Error fetching campaigns', error: err });
    }
  };
  




module.exports={getAllCampaignsSponsorWise,getParticularCampaign,getCampaignsCategoryWise}