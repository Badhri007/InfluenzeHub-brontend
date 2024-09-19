const mongoose = require("mongoose");

const influencerSchema=new mongoose.Schema(
    {
        username:{type:String,required:true,unique:true},
        gender:{type:String,required:true},
        niche:{type:String,required:true},
        reach:{type:Number,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        platform:{type:String,required:true},
        profile_photo_url:{type:String}
    }
)


const Influencers=new mongoose.model('Influencers',influencerSchema);

module.exports=Influencers;