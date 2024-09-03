const mongoose = require('mongoose')

const {Campaigns}=require('../../models/campaignModel')

const getAllCampaigns=async(req,res)=>{
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

module.exports={getAllCampaigns}