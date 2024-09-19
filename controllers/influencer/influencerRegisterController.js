const mongoose = require("mongoose");
const Influencers=require('../../models/influencerModel')
const bcrypt=require('bcryptjs')

const influencerRegister=async(req,res)=>{

    try{
        const {username,gender,niche,reach,email,password,platform,profile_photo_url} = req.body;
        const hashed_password=await bcrypt.hash(password,10);
        
        const data=new Influencers({username,gender,niche,reach,email,password:hashed_password,platform,profile_photo_url});
        const newUser=await data.save();
        res.json(newUser);
        console.log("User added to DB!")
    }

    catch(err)
    {
        res.json(err);
    }
   
}


module.exports={influencerRegister};