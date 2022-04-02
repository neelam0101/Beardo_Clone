const mongoose=require("mongoose")
const homeSchema=new mongoose.Schema(
{
    img_url: { type: String, required: true },
    title: { type: String, required: true},
    price: { type: Number, required: true },
   
   
},
{
    timestamps:true,
    versionKey:false,
}

)
module.exports=mongoose.model("home",homeSchema)