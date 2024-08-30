const Router = require('express').Router();

const {influencerRegister}=require('../controllers/influencerRegisterController')
const { influencerLogin } = require('../controllers/influencerLoginController');
const { sponsorRegister } = require('../controllers/sponsorRegisterController');
const { sponsorLogin } = require('../controllers/sponsorLoginController');

Router.post("/influencerRegister",influencerRegister);
Router.post("/influLogin",influencerLogin);

Router.post("/sponsoRegister",sponsorRegister);
Router.post("/sponsorLogin",sponsorLogin);






module.exports={Router};