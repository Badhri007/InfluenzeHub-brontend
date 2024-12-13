const mongoose = require('mongoose')

const influencerAdRequestSchema=new mongoose.Schema({
    name:{type:String,required:true},
    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Campaign'
    },
    sponsor_name:{
        type: String,
        required: true,
        ref: 'Sponsor'
    },
    requested_influencer:{
        type:String,
        required:true,
        ref:'Influencer'
    },
    message:{type:String,required:true},
    payment_amount:{type:Number,required:true},
    status:{type:String,required:true}
})

const influencerAdRequest=new mongoose.model('influencerAdRequest',influencerAdRequestSchema);

module.exports={influencerAdRequest}