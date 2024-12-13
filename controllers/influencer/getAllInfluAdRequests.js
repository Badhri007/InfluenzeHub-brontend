const mongoose=require('mongoose')
const Influencers=require('../../models/influencerModel')
const {Campaigns}=require('../../models/campaignModel')
const{adRequest}= require('../../models/adModel')
const {Sponsors}=require('../../models/sponsorModel')


const getAllInfluAdRequests = async (req, res) => {
  try {
    const influencerId = req.headers['influencer_id'];
    console.log(influencerId);

    const influencer = await Influencers.findOne({_id: influencerId});

    if (!influencer) {
      return res.status(404).json({ message: "Influencer not found" });
    }

    const influencer_username = influencer.username;
    console.log("Username:", influencer_username);
    const allAdRequests = await adRequest.find({ influencer_username });

    const updatedAdRequests = await Promise.all(
      allAdRequests.map(async (adrequest) => {
        try {
          const campaign = await Campaigns.findOne({ _id: adrequest.campaignId });
          const campaign_startDate = campaign.startDate;
          const campaign_endDate = campaign.endDate;

          const campaign_name = campaign ? campaign.name : 'Unknown Campaign';
          const sponsor = campaign ? await Sponsors.findOne({ _id: campaign.sponsorId }) : null;
          const sponsor_name = sponsor ? sponsor.username : 'Unknown Sponsor';

          return {
            ...adrequest._doc,
            campaignName: campaign_name,
            sponsorName: sponsor_name,
            campaign_startDate:campaign_startDate,
            campaign_endDate:campaign_endDate,
            ad_id: adrequest._id
          };
        } catch (err) {
          console.error('Error fetching campaign or sponsor:', err);
          return {
            ...adrequest._doc,
            campaignName: 'Unknown Campaign',
            sponsorName: 'Unknown Sponsor',
            campaign_startDate:'Unknown',
            campaign_endDate:'Unknown',
          };
        }
      })
    );

    res.json(updatedAdRequests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching all ad requests', error: err });
  }
};



const getAllPublicInfluAdRequests = async (req, res) => {
  try {
    const influencerId = req.headers['influencer_id'];
    console.log(influencerId);

    const influencer = await Influencers.findOne({_id: influencerId});

    if (!influencer) {
      return res.status(404).json({ message: "Influencer not found" });
    }

    const influencer_username = influencer.username;
    console.log("Username:", influencer_username);
    const allacceptedAdRequests = await adRequest.find({ influencer_username,status:'accept' });


    const updatedAdRequests = await Promise.all(
      allacceptedAdRequests.map(async (adrequest) => {
        try {
          const campaign = await Campaigns.findOne({ _id: adrequest.campaignId });
          const campaign_startDate = campaign.startDate;
          const campaign_endDate = campaign.endDate;

          const campaign_name = campaign ? campaign.name : 'Unknown Campaign';
          const campaign_visibility = campaign ? campaign.visibilty : 'Unknown visibility'
          const campaign_pic = campaign ? campaign.imageUrl : 'Unknown image';
          const sponsor = campaign ? await Sponsors.findOne({ _id: campaign.sponsorId }) : null;
          const sponsor_name = sponsor ? sponsor.username : 'Unknown Sponsor';

          return {
            ...adrequest._doc,
            campaignName: campaign_name,
            sponsorName: sponsor_name,
            campaign_startDate:campaign_startDate,
            campaign_endDate:campaign_endDate,
            campaign_visibility:campaign_visibility,
            campaign_pic:campaign_pic,
            ad_id: adrequest._id
          };
        } catch (err) {
          console.error('Error fetching campaign or sponsor:', err);
          return {
            ...adrequest._doc,
            campaignName: 'Unknown Campaign',
            sponsorName: 'Unknown Sponsor',
            campaign_startDate:'Unknown',
            campaign_visibility:'Unknown',
            campaign_pic:'Unknow image',
            campaign_endDate:'Unknown',
          };
        }
      })
    );

    res.json(updatedAdRequests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching all ad requests', error: err });
  }
};







module.exports={getAllInfluAdRequests,getAllPublicInfluAdRequests};