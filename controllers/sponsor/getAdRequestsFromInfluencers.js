const mongoose = require('mongoose')

const {influencerAdRequest}=require('../../models/influencerAdRequest')

const getAllAdRequestsFromInfluencers=async(req,res)=>{
    const sponsor = req.headers['sponsor_name'];
    console.log("Sponsor:", sponsor);

    if (!sponsor) {
        return res.status(400).json({ error: 'Sponsor name is required' });
    }


    const influencerRequests=await influencerAdRequest.find({sponsor_name:sponsor});
    console.log("Requests from Influencers:",influencerRequests);
    res.json(influencerRequests);
}


module.exports={getAllAdRequestsFromInfluencers}
