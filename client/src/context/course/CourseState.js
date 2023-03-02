/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import CourseContext from "./courseContext";
require('dotenv').config();

const CourseState=(props)=>{

    const host=process.env.PORT || 3002;
    const addedCourse=[];
    const Contact=[];

      const[alert,setAlert]=useState(null);
      const [course,setCourse]=useState(addedCourse);
      const[lCourse,setLCourse]=useState(addedCourse);
      const[total,setTotal]=useState('');
      const[contact,setContact]=useState(Contact)
      const[admin,fetchAdmin]=useState('false');


      //Logic For Show Alert In All ComPonents
      const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        });
        setTimeout(()=>{
          setAlert(null);
        },3000);
      }

      //Logic To Fetch All Course
      const getAllCourse=async()=>{
        const response=await fetch(`/course`,{
          method:'get',
          headers:{
              'Content-Type':'application/json'
          },
        });
        const json=await response.json();
        setCourse(json);
        getLatestCourse();
        getCourseTotal();
        getAllMessage();
      }
      const getLatestCourse=async()=>{
        const response=await fetch(`/course/latestcourse`,{
          method:'get',
          headers:{
              'Content-Type':'application/json'
          },
        });
        const json=await response.json();
        setLCourse(json)
      }

      const getCourseTotal=async()=>{
        const response=await fetch(`/course/gettotalcourse`,{
          method:'get',
          headers:{
              'Content-Type':'application/json'
          },
        });
        const json=await response.json();
        setTotal(json)
      }

      //Logic To Add New Course
      const addCourse=async(name,description,tag,url,coupen,img)=>{
        const response=await fetch(`/course/addcourse`,{
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem('token')
          },
          body:JSON.stringify({name,description,tag,url,coupen,img})
      });
      const Course=await response.json();
      setCourse(course.concat(Course));
      showAlert("Course Added Successfully","success");
      }


      //Logic To DElete Course
      const deleteCourse=async(id)=>{
        const response=await fetch(`/course/deletecourse/${id}`,{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem('token')
          },
          // body:JSON.stringify(data)
      });
      const json=await response.json();
      console.log(json);
        getAllCourse();
        showAlert("Course Deleted Successfully","danger");
    }


      //Logic To Update Course
      const updateCourse=async(id,name,description,tag,url,coupen,img)=>{
        const response=await fetch(`/course/updatecourse/${id}`,{
          method:'PUT',
          headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem('token')
          },
          body:JSON.stringify({name,description,tag,url,coupen,img})
      });
      const json=response.json();
      console.log(json);
        for(let i=0;i<course.length;i++){
          const element=course[i];
          if(element._id===id){
            element.name=name;
            element.description=description;
            element.tag=tag;
            element.url=url;
            element.coupen=coupen;
            element.img=img;
          }
        }
        getAllCourse();
      }

      //fetch all message
      const getAllMessage=async()=>{
        const response=await fetch(`/contact/fetchmessage`,{
          method:'get',
          headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem('token')
          },
        });
        const json=await response.json();
        setContact(json);
      }
      //delete messgae
      const deleteMessage=async(id)=>{
          const response=await fetch(`/contact/deletemessage/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
        });
          let json = await response.json();
          getAllMessage();
          showAlert("Message Deleted Successfully","danger");
      }
      
      //send message
      const sendMessage=async(name,email,phone,message)=>{
        const response=await fetch(`/contact/send`,{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({name,email,phone,message})
      });
      const Contact=await response.json();
      setContact(contact.concat(Contact));
      }


    return(
    <CourseContext.Provider value={{course,setCourse,alert,showAlert,getAllCourse,getLatestCourse,addCourse,lCourse,deleteCourse,admin,fetchAdmin,updateCourse,total,contact,sendMessage,deleteMessage,getAllMessage}}>
        {props.children}
    </CourseContext.Provider>
    )
}

export default CourseState;