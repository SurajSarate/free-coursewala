import React from "react";
import Course from "./Course";

function ShowCourse() {
  return (
    <div className="main-wrapper">
      <section className="courses-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title text-center mb-4">
                <h2 className="title">our courses</h2>
                <p className="sub-title mb-0">Find the right course for you</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-center">
               <Course/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowCourse;
