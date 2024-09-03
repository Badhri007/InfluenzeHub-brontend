const mongoose=require('mongoose')

const sponsorSchema=new mongoose.Schema(
    {
        username:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true}
    }
);

const Sponsors=new mongoose.model('Sponsors',sponsorSchema);

module.exports={Sponsors}