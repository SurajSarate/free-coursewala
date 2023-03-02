import React, { useContext } from "react";
import CourseContext from "../context/course/courseContext";

function LatestCourses() {
  const context = useContext(CourseContext);
  const { lCourse } = context;
  return (
    <div>
      <section className="courses-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div id="courses" className="section-title text-center">
                <h2 className="title">courses</h2>
                <p className="sub-title">Find the right course for you</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {lCourse.map((e) => {
              return (
                <div className="col-md-6 col-lg-3 course-box justify-content-center">
                  <div className="courses-item">
                    <div className="courses-item-inner">
                      <div className="img-box">
                        <img src={e.img} alt={e.img} border="0" />
                      </div>
                      <h3 className="title">{e.name}</h3>
                      <div className="description">                      
                       {e.description}
                      </div>
                      <a
                        type="button"
                        href={e.url + e.coupen}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-warning mt-3 btn-block w-50"
                      >
                        Enroll
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <a href="/courses" className="btn btn-theme">
                view all courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestCourses;
