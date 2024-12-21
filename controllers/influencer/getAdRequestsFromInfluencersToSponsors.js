const mongoose = require('mongoose')

const {influencerAdRequest}=require('../../models/influencerAdRequest');
const Influencers = require('../../models/influencerModel');


const getAdRequestsFromInfluencersToSponsors=async(req,res)=>{
    const influencerId = req.headers['influencer_id'];
    const campaignId = req.headers['campaign_id']

    const influencer = await Influencers.findOne({_id:influencerId})
    console.log("influencer_name:", influencer.username);

    if (!influencer) {
        return res.status(400).json({ error: 'Influencer name is not present' });
    }


    const influencerRequests=await influencerAdRequest.find({requested_influencer:influencer.username,campaignId:campaignId});
    console.log("Requests from Influencers for particular campaign:",influencerRequests);
    res.json(influencerRequests);
}





module.exports={getAdRequestsFromInfluencersToSponsors}
