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

module.exports={getAllInfluencers}