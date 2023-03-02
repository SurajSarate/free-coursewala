const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { body, validationResult } = require("express-validator");
const fetchAdmin = require("../middleware/fetchAdmin");


// route 1 add new message no login required
router.post(
    "/send",
    [
      body("name").isString(),
      body("email").isString(),
      body("phone").isString(),
      body("message").isString(),
    ],
    async (req, res) => {
      const{name,email,phone,message}=req.body
      const errors= validationResult(req);
      if(!errors.isEmpty){
          return res.status(400).json({errors:errors.array()});
      }
        const contact=new Contact({
          name,email,phone,message
        })
        const savedContact=await contact.save();
         res.json(savedContact);
    }
  );
  
// route 2 get all message
router.get("/fetchmessage",fetchAdmin, async (req, res) => {
  const contact = await Contact.find();
  res.json(contact);
});

// route 3 delete contact login required
router.delete(
  "/deletemessage/:id",
  fetchAdmin,async (req, res) => {
      let contact=await Contact.findByIdAndDelete(req.params.id);
      res.json({"Success":"Message has been deleted",contact:contact});
  }
);

module.exports = router;
