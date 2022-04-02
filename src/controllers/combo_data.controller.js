const express = require("express");
const router= express.Router();
const Product= require("../models/combo_data.model");

const crudController = require("./crudController");

router.post("", crudController.post(Product));
router.delete("/:id", crudController.deleteOne(Product));  

  router.get("", async (req, res) => {
    try {
      const product = await Product.find().lean().exec();
     return res.status(200).send({ product: product }); // []
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  router.get("/:id",async(req,res)=>{
    try{
  const  product=await Product.findById(req.params.id).lean().exec();
  return res.status(200).send({product: product})
    }
    catch(err){
      return res.status(500).send({message:err.message})
    }
  
  })
  
  
  router.patch("/:id", async (req, res) => {
    try {
      const  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
     
      return res.status(200).send({product: product});
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  

  module.exports=router;