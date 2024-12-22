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



const updateAdRequestFromInfluencer = async(req,res) =>{
  try {
    const { _id,name, campaignId,requested_influencer,message,sponsor_name, payment_amount,status} = req.body;

    let updatedAd = await influencerAdRequest.findOneAndUpdate(
      { _id },
      {
        name,
        message,
        payment_amount,
        status,
        campaignId,
        requested_influencer,
        sponsor_name,
      },
      { new: true, runValidators: true }
    );

    if (!updatedAd) {
      return res.status(404).json({ error: "Ad not found" });
    }

    console.log("Updated Ad:", updatedAd);

    res.json(updatedAd);
  } catch (err) {
    console.error("Error updating Ad status:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports={getAllAdRequestsFromInfluencers,getAdRequestsFromInfluencersForParticularCampaign,updateAdRequestFromInfluencer}
