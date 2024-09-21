const mongoose=require('mongoose')
const Influencers=require('../../models/influencerModel')
const {Campaigns}=require('../../models/campaignModel')
const{adRequest}= require('../../models/adModel')

const getAllInfluAdRequests=async(req,res)=>{
    try {
        const influencerId = req.headers['influencer_id']
        console.log(influencerId);
        // const influencer=await Influencers.findOne({_id:influencerId});

        const influencer = await Influencers.find({_id:influencerId});

        let influencer_username=influencer[0].username;
        console.log("Username:",influencer_username);
        const allAdRequests = await adRequest.find({ influencer_username: influencer_username });

        // console.log("All Ad Request:", allAdRequests);

        const updatedAdRequests = await Promise.all(
            allAdRequests.map(async (adrequest) => {
              try {
                console.log("LOP:", adrequest.campaignId);
                const campaign = await Campaigns.findOne({ _id: adrequest.campaignId });
                const campaign_name = campaign ? campaign.name : 'Unknown Campaign'; 
                console.log("Campaign name:", campaign_name);
          
                return {
                  ...adrequest._doc,  
                  campaignName: campaign_name
                };
              } catch (err) {
                console.error(`Error fetching campaign for ID: ${adrequest.campaignId}`, err);
                return {
                  ...adrequest._doc,
                  campaignName: 'Unknown Campaign'  // Fallback in case of error
                };
              }
            })
          );
          

        res.json(updatedAdRequests);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching all ad requests backend', error: err });
    }
}



module.exports={getAllInfluAdRequests};