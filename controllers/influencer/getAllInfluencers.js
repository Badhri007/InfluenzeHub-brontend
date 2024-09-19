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


module.exports={getAllInfluencers,getInfluencer};