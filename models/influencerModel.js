const mongoose = require("mongoose");

const influencerSchema=new mongoose.Schema(
    {
        username:{type:String,required:true,unique:true},
        niche:{type:String,required:true},
        reach:{type:Number,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        platform:{type:String,required:true}
    }
)


const Influencers=new mongoose.model('Influencers',influencerSchema);

module.exports=Influencers;