const mongoose = require('mongoose')
const Influencers  = require('../../models/influencerModel');
const { influencerAdRequest } = require('../../models/influencerAdRequest');

const adRequestSaveFromInfluencer = async(req,res)=>
{
    const {adname,message,payment_amount,campaignSponsor,status,campaignId,influencerid} = req.body;
    console.log("name:",adname);
    console.log("message:",message);
    console.log("payment_amount:",payment_amount);
    console.log("sponsor_name:",campaignSponsor);
    console.log("status:",status);
    console.log("campaign_id:",campaignId);
    console.log("influencer_id:",influencerid);

    const influencer = await Influencers.findOne({_id:influencerid});

    const requested_influencer = influencer.username;
    console.log("Influencer:",requested_influencer);


    const adRequest = new influencerAdRequest({name:adname,message,payment_amount,sponsor_name:campaignSponsor,status,campaignId,requested_influencer})

    const newRequest=await adRequest.save();
    res.json(newRequest);







}

module.exports={adRequestSaveFromInfluencer}