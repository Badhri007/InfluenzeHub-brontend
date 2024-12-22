const Router = require('express').Router();

const {influencerRegister}=require('../controllers/influencer/influencerRegisterController')
const { influencerLogin } = require('../controllers/influencer/influencerLoginController');
const { sponsorRegister } = require('../controllers/sponsor/sponsorRegisterController');
const { sponsorLogin } = require('../controllers/sponsor/sponsorLoginController');
const { storeCampaign } = require('../controllers/sponsor/storeCampaignController');
const { getAllCampaignsSponsorWise,getParticularCampaign,getCampaignsCategoryWise } = require('../controllers/sponsor/getAllCampaignsController');
const {getAllInfluencers,getInfluencer, getInfluencersCategoryWise,getInfluencerIdFromUsername}=require('../controllers/influencer/getAllInfluencers')
const {adRequestSave}=require('../controllers/sponsor/adRequestSaveController')
const {updateCampaign}=require('../controllers/sponsor/updateCampaignController')
const {deleteCampaign} = require('../controllers/sponsor/deleteCampaignController')
const {getAllAdRequests} = require('../controllers/sponsor/getAllAdRequestsController');
const {getAllInfluAdRequests,getAllPublicInfluAdRequests}=require('../controllers/influencer/getAllInfluAdRequests');
const { updateProfile } = require('../controllers/influencer/updateProfileController');
const { updateAd } = require('../controllers/influencer/updateAdRequest');
const { getAllCampaigns } = require('../controllers/influencer/getCampaignsController')
const { getSponsorById } = require('../controllers/sponsor/sponsorDetails');
const { adRequestSaveFromInfluencer } = require('../controllers/influencer/saveSponsorAdRequests');
const {getAllAdRequestsFromInfluencers,getAdRequestsFromInfluencersForParticularCampaign,updateAdRequestFromInfluencer} = require('../controllers/sponsor/getAdRequestsFromInfluencers')
const {getAdRequestsFromInfluencersToSponsors} = require('../controllers/influencer/getAdRequestsFromInfluencersToSponsors')



Router.post("/influencerRegister",influencerRegister);
Router.post("/influLogin",influencerLogin);
Router.put("/updateProfile",updateProfile)

Router.post("/sponsoRegister",sponsorRegister);
Router.post("/sponsorLogin",sponsorLogin);

Router.post("/storeCampaign",storeCampaign);
Router.get("/getAllCampaignsSponsorWise",getAllCampaignsSponsorWise)
Router.get("/getParticularCampaign",getParticularCampaign)
Router.get("/getAllInfluencers",getAllInfluencers)
Router.get("/getInfluencer",getInfluencer)
Router.post("/getCampaignsCategoryWise",getCampaignsCategoryWise)

Router.post("/adRequestSave",adRequestSave)

Router.post("/adRequestSaveFromInfluencer",adRequestSaveFromInfluencer)
Router.put("/updateCampaign", updateCampaign);
Router.delete("/deleteCampaign",deleteCampaign);


Router.get("/getAllAdRequests",getAllAdRequests)
Router.get("/getAllInfluAdRequests",getAllInfluAdRequests)
Router.get("/getAllCampaigns",getAllCampaigns);
Router.get("/getSponsorById",getSponsorById)
Router.get("/getAllPublicInfluAdRequests",getAllPublicInfluAdRequests);
Router.post("/getInfluencersCategoryWise",getInfluencersCategoryWise)

Router.get("/getInfluencerIdFromUsername",getInfluencerIdFromUsername)

Router.put("/updateAd",updateAd)


Router.get("/getAllAdRequestsFromInfluencers",getAllAdRequestsFromInfluencers)
Router.get("/getAdRequestsFromInfluencersToSponsors",getAdRequestsFromInfluencersToSponsors)
Router.get("/getAdRequestsFromInfluencersForParticularCampaign",getAdRequestsFromInfluencersForParticularCampaign)

Router.put("/updateAdRequestFromInfluencer",updateAdRequestFromInfluencer)





module.exports={Router};
