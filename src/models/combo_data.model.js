const mongoose=require("mongoose")
const product_body_Schema1=new mongoose.Schema(
{
    img_url: { type: String, required: true },
    title: { type: String, required: true},
    price: { type: Number, required: true },
    category:{ type: String, required: false},
    quantiy:{ type: String, required: false}
   
},
{
    timestamps:true,
    versionKey:false,
}

)
module.exports=mongoose.model("combo_data_collection",product_body_Schema1)