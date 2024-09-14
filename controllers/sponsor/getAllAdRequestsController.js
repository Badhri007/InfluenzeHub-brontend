const mongoose = require('mongoose')

const {adRequest}=require('../../models/adModel')

const getAllAdRequests=async(req,res)=>{
    const campaignId = req.headers['campaign_id'];
    console.log("Campaign Id:", campaignId);

    if (!campaignId) {
        return res.status(400).json({ error: 'Campaign ID is required' });
    }
    let objectId;
    if (mongoose.Types.ObjectId.isValid(campaignId)) {
        objectId = new mongoose.Types.ObjectId(campaignId);
    } else {
        return res.status(400).json({ error: 'Invalid Campaign ID format' });
    }

    const userRequests=await adRequest.find({campaignId:campaignId});
    console.log("User campaigns:",userRequests);
    res.json(userRequests);
}


module.exports={getAllAdRequests}