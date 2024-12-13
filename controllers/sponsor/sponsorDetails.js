const { Sponsors } = require('../../models/sponsorModel')
const getSponsorById = async(req,res)=>{

    const sponsorId = req.headers['sponsorid'];
    console.log(sponsorId);
    const sponsor = await Sponsors.findOne({_id:sponsorId});
    res.json(sponsor.username);

}
module.exports =  { getSponsorById }