const mongoose = require('mongoose');


const campaignSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    niche:{type:String,required:true},
    budget:{type:Number,required:true},
    visibility:{type:String,required:true},
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true},
    imageUrl:{type:String}
});

const Campaigns=new mongoose.model('Campaigns',campaignSchema);

module.exports={Campaigns};