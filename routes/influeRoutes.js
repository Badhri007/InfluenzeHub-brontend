const Router = require('express').Router();

const {influencerRegister}=require('../controllers/influencer/influencerRegisterController')
const { influencerLogin } = require('../controllers/influencer/influencerLoginController');
const { sponsorRegister } = require('../controllers/sponsor/sponsorRegisterController');
const { sponsorLogin } = require('../controllers/sponsor/sponsorLoginController');
const { storeCampaign } = require('../controllers/sponsor/storeCampaignController');
const { getAllCampaigns } = require('../controllers/sponsor/getAllCampaignsController');

Router.post("/influencerRegister",influencerRegister);
Router.post("/influLogin",influencerLogin);

Router.post("/sponsoRegister",sponsorRegister);
Router.post("/sponsorLogin",sponsorLogin);

Router.post("/storeCampaign",storeCampaign);
Router.get("/getAllCampaigns",getAllCampaigns)






module.exports={Router};