const mongoose = require('mongoose')

const {influencerAdRequest}=require('../../models/influencerAdRequest')

const getAllAdRequestsFromInfluencers=async(req,res)=>{
    const sponsor = req.headers['sponsorname'];
    console.log("Sponsor:", sponsor);

    if (!sponsor) {
        return res.status(400).json({ error: 'Sponsor name is required' });
    }


    const influencerRequests=await influencerAdRequest.find({sponsor_name:sponsor});
    console.log("Requests from Influencers:",influencerRequests);
    res.json(influencerRequests);
}

const getAdRequestsFromInfluencersForParticularCampaign = async(req,res)=>{
  const sponsor = req.headers['sponsorname'];
  const campaignid = req.headers['campaignid']
    console.log("Sponsor:", sponsor);
    console.log("campaign id:", campaignid);

    if (!sponsor) {
        return res.status(400).json({ error: 'Sponsor name is required' });
    }


    const influencerRequests=await influencerAdRequest.find({sponsor_name:sponsor,campaignId:campaignid});
    console.log("Requests from Influencers for particular campaign:",influencerRequests);
    res.json(influencerRequests);
}

module.exports={getAllAdRequestsFromInfluencers,getAdRequestsFromInfluencersForParticularCampaign}
