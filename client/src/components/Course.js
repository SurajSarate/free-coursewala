import React, { useContext, useRef, useState,useEffect } from "react";
import CourseContext from "../context/course/courseContext";
import CourseContent from "./CourseContent";

function Course(props) {
  const context = useContext(CourseContext);
  const { course, deleteCourse, updateCourse,getAllCourse } = context;
  const [input, setinput] = useState({
    id: "",
    ename: "",
    edescription: "",
    etag: "",
    eurl: "",
    ecoupen: "",
    eimg: ""
  });
  const ref = useRef(null);
  const refClose = useRef(null);
  useEffect(() => {
    getAllCourse();
  });
  const editCourse = (Course) => {
    ref.current.click();
    setinput({
      id: Course._id,
      ename: Course.name,
      edescription: Course.description,
      etag: Course.tag,
      eurl: Course.url,
      ecoupen: Course.coupen,
      eimg: Course.img,
    });
  };

  const handleAddNoteClick = () => {
    updateCourse(
      input.id,
      input.ename,
      input.edescription,
      input.etag,
      input.ecoupen,
      input.eimg
    );
    refClose.current.click();
  };

  const onChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Course
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="mb-3 col-6">
                  <label htmlFor="name" className="form-label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ecourse name"
                    value={input.ename}
                    name="ename"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    value={input.edescription}
                    name="edescription"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    value={input.etag}
                    name="etag"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="url" className="form-label">
                    Course Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eurl"
                    name="eurl"
                    value={input.eurl}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="coupen" className="form-label">
                    Coupen
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ecoupen"
                    name="ecoupen"
                    value={input.ecoupen}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="img" className="form-label">
                    Img
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eimg"
                    name="eimg"
                    value={input.eimg}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn ms-2 m-0 btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleAddNoteClick}
                className="btn m-0 ms-2 btn-primary"
              >
                Update Course
              </button>
            </div>
          </div>
        </div>
      </div>

        {course.map((course) => {
          return (
            <CourseContent
              course={course}
              deleteCourse={deleteCourse}
              editCourse={editCourse}
              key={course._id}
            />
          );
        })}
    </>
  );
}

export default Course;
