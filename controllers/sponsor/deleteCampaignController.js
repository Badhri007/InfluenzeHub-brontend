const mongoose = require('mongoose');
const {Campaigns}=require('../../models/campaignModel')

const deleteCampaign=async(req,res)=>
{
        try
        {
            const campaignId=req.headers['campaign_id'];
            const deletedCampaign = await Campaigns.deleteOne({ _id: campaignId });

            if (deletedCampaign.deletedCount === 0) {
                return res.status(404).json({ message: 'Campaign not found' });
            }

            res.json({ message: 'Campaign successfully deleted' });
            console.log("Campaign deleted from DB");
        } 
        catch (error) 
        {
            res.status(500).json({ message: 'Error deleting campaign', error });
        }
};

module.exports={deleteCampaign};