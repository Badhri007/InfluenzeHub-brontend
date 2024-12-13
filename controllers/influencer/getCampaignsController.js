const mongoose = require('mongoose')

const {Campaigns}=require('../../models/campaignModel')

const getAllCampaigns=async(req,res)=>{
    const allCampaigns=await Campaigns.find();
    console.log("All campaigns:",allCampaigns);
    res.json(allCampaigns);
}



module.exports={getAllCampaigns}