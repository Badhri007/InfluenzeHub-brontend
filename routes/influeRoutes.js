const Router = require('express').Router();

const {influencerRegister}=require('../controllers/influencer/influencerRegisterController')
const { influencerLogin } = require('../controllers/influencer/influencerLoginController');
const { sponsorRegister } = require('../controllers/sponsor/sponsorRegisterController');
const { sponsorLogin } = require('../controllers/sponsor/sponsorLoginController');
const { storeCampaign } = require('../controllers/sponsor/storeCampaignController');
const { getAllCampaigns,getParticularCampaign,getCampaignsCategoryWise } = require('../controllers/sponsor/getAllCampaignsController');
const {getAllInfluencers}=require('../controllers/influencer/getAllInfluencers')
const {adRequestSave}=require('../controllers/sponsor/adRequestSaveController')
const {updateCampaign}=require('../controllers/sponsor/updateCampaignController')
const {deleteCampaign} = require('../controllers/sponsor/deleteCampaignController')

Router.post("/influencerRegister",influencerRegister);
Router.post("/influLogin",influencerLogin);

Router.post("/sponsoRegister",sponsorRegister);
Router.post("/sponsorLogin",sponsorLogin);

Router.post("/storeCampaign",storeCampaign);
Router.get("/getAllCampaigns",getAllCampaigns)
Router.get("/getParticularCampaign",getParticularCampaign)
Router.get("/getAllInfluencers",getAllInfluencers)
Router.post("/getCampaignsCategoryWise",getCampaignsCategoryWise)

Router.post("/adRequestSave",adRequestSave)
Router.put("/updateCampaign", updateCampaign);
Router.delete("/deleteCampaign",deleteCampaign)






module.exports={Router};