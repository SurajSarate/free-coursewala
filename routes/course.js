const express = require("express");
const fetchAdmin = require("../middleware/fetchAdmin");
const router = express.Router();
const Course = require("../models/Course");
const { body, validationResult } = require("express-validator");

// route 1 get all courses
router.get("/", async (req, res) => {
  const course = await Course.find().sort({'_id':-1});
  res.json(course);
});
// route 2 get latest 4 courses
router.get("/latestcourse", async (req, res) => {
  const course = await Course.find().sort({'_id':-1}).limit(4);
  res.json(course);
});
router.get("/gettotalcourse", async (req, res) => {
  const course = await Course.count();
  res.json(course);
});

// route 2 add new courses login required
router.post(
  "/addcourse",
  fetchAdmin,
  [
    body("name").isString(),
    body("description").isString(),
    body("url").isString(),
  ],
  async (req, res) => {
    const{name,description,tag,url,coupen,img}=req.body
    const errors= validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()});
    }
      const course=new Course({
        name,description,tag,url,coupen,img
      })
      const savedCourse=await course.save();
       res.json(savedCourse);
  }
);

// route 3 update  courses login required
router.put(
  "/updatecourse/:id",
  fetchAdmin,async (req, res) => {
    const{name,description,tag,url,coupen,img}=req.body
    let newCourse={};
    if(name){newCourse.name=name};
    if(description){newCourse.description=description};
    if(tag){newCourse.tag=tag};
    if(url){newCourse.url=url};
    if(img){newCourse.img=img};
    if(coupen){newCourse.coupen=coupen};
    
    //finding course to update
    let course=Course.findById(req.params.id);
    if(!course){
        return res.status(400).json({errors:"not found"});
    }
    course=await Course.findByIdAndUpdate(req.params.id,{$set:newCourse},{$new:true});
    res.json(course)
  }
);


// route 4 delete course login required
router.delete(
  "/deletecourse/:id",
  fetchAdmin,async (req, res) => {
      let course=await Course.findByIdAndDelete(req.params.id);
      res.json({"Success":"Course has been deleted",course:course});
  }
);

module.exports = router;
