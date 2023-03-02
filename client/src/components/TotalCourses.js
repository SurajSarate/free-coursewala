import React,{useContext} from "react";
import CourseContext from "../context/course/courseContext";

function TotalCourses() {
  const context = useContext(CourseContext);
  const {total} = context;
  return (
    <div>
      <section className="fun-facts-section">
        <div className="container">
          <div className="box py-2">
            <div className="row text-center">
              <div className="col-md-6 col-lg-4">
                <div className="fun-facts-item">
                  <h2 className="style-2">{total}</h2>
                  <p>courses</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="fun-facts-item">
                  <h2 className="style-3">50+</h2>
                  <p>countries</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="fun-facts-item">
                  <h2 className="style-4">100+</h2>
                  <p>skilled instructors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TotalCourses;
