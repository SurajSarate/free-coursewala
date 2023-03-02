import React,{useEffect,useContext} from 'react'
import Hero from './Hero'
import LatestCourses from './LatestCourses'
import TotalCourses from './TotalCourses'
import Footer from './Footer'
import CourseContext from "../context/course/courseContext";

function AdminHome() {
    const context = useContext(CourseContext);
    const {getAllCourse} = context;
    
    useEffect(() => {
        getAllCourse();
      },[]);
    return (
        <div className="main-wrapper">
            <Hero/>
            <TotalCourses/>
            <LatestCourses/>
            <Footer/>
        </div>
    )
}
export default AdminHome
