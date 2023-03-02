import React, { useContext } from "react";
import CourseContext from "../context/course/courseContext";
function CourseContent(props) {
  const context = useContext(CourseContext);
  const { admin } = context;
  const { course, editCourse, deleteCourse } = props;

  return (
    <div className="col-md-6 col-lg-3 course-box justify-content-center">
      <div className="courses-item">
        <div className="courses-item-inner">
          <div className="img-box">
            <img src={course.img} alt={course.img} border="0" />
          </div>
          <h3 className="title">{course.name}</h3>
          <div className="description">
           {course.description}
          </div>
          <a
            type="button"
            href={course.url + course.coupen}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-warning mt-3  btn-block w-50"
          >
            Enroll
          </a>
          <div className={`update ${admin === "true" ? "" : "d-none"}`}>
            <i
              onClick={() => editCourse(course)}
              className="fas fa-pencil-alt"
            ></i>
          </div>
          <div className={`del  ${admin === "true" ? "" : "d-none"}`}>
            <i
              onClick={() => deleteCourse(course._id)}
              className="fas fa-trash-alt"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
