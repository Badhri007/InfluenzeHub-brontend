const mongoose = require('mongoose')

const adRequestSchema=new mongoose.Schema({
    name:{type:String,required:true},
    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Campaign'
    },
    influencerId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Influencer'
    },
    requirements:{type:String,required:true},
    payment_amount:{type:Number,required:true},
    status:{type:String,required:true}
})

const adRequest=new mongoose.model('adRequest',adRequestSchema);

module.exports={adRequest}