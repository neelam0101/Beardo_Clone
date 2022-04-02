const express = require("express");
const router= express.Router();
const Home= require("../models/home.model");

const crudController = require("./crudController");

router.post("", crudController.post(Home));
router.delete("/:id", crudController.deleteOne(Home));  

  router.get("", async (req, res) => {
    try {
      const home = await Home.find().lean().exec();
     return res.status(200).send({ home: home }); // []
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  router.get("/:id",async(req,res)=>{
    try{
  const  home=await Home.findById(req.params.id).lean().exec();
  return res.status(200).send({home: home})
    }
    catch(err){
      return res.status(500).send({message:err.message})
    }
  
  })
  
  
  router.patch("/:id", async (req, res) => {
    try {
      const  home = await Home.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
     
      return res.status(200).send({home: home});
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  

  module.exports=router;