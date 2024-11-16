const mongoose=require('mongoose')
const {Sponsors}=require('../../models/sponsorModel')
const bcrypt=require('bcryptjs')


const sponsorRegister=async(req,res)=>{
    const {username,email,password}=req.body;
    const hashed_password=await bcrypt.hash(password,10);

    const sponsor=new Sponsors({username,email,password:hashed_password});

    const newSponsor=await sponsor.save();
    res.json(newSponsor);

}

module.exports={sponsorRegister}