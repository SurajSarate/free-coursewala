import React, { useContext, useState } from "react";
import CourseContext from "../context/course/courseContext";


function AddCourse() {
  const context = useContext(CourseContext);
  const { addCourse } = context;
  const [input, setinput] = useState({
    name: "",
    description: "",
    tag: "",
    url: "",
    coupen: "",
    img: "",
  });

  const handleAddNoteClick = (e) => {
    e.preventDefault();
    addCourse(
      input.name,
      input.description,
      input.tag,
      input.url,
      input.coupen,
      input.img,
    );
    setinput({
      name: "",
      description: "",
      tag: "",
      url: "",
      coupen: "",
      img: "",
    });
  };

  const onChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="main-wrapper">
      <section className="signup section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="signup-form box">
                <h2 className="form-title text-center">Add New Course</h2>
                <form action="">
                  <div className="form-group">
                    <input
                      placeholder="Course Name"
                      className="form-control"
                      id="course name"
                      name="name"
                      value={input.name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Course Description"
                      className="form-control"
                      id="description"
                      value={input.description}
                      name="description"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Course Tag"
                      type="text"
                      className="form-control"
                      id="tag"
                      value={input.tag}
                      name="tag"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Course Url"
                      className="form-control"
                      id="url"
                      name="url"
                      value={input.url}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Course Coupen"
                      className="form-control"
                      id="coupen"
                      value={input.coupen}
                      name="coupen"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      autoComplete="on"
                      type="text"
                      list="CourseImgList"
                      placeholder="Course Img"
                      className="form-control"
                      id="img"
                      value={input.img}
                      name="img"
                      onChange={onChange}
                    />
                    <datalist id="CourseImgList">
                      <option value="./img/courses/business/1.png"/>
                      <option value="./img/courses/business/2.png"/>
                      <option value="./img/courses/business/3.png"/>
                      <option value="./img/courses/business/4.png"/>
                      <option value="./img/courses/programming/1.png"/>
                      <option value="./img/courses/programming/2.png"/>
                      <option value="./img/courses/programming/3.png"/>
                      <option value="./img/courses/programming/4.png"/>
                      <option value="./img/courses/web/1.jpg"/>
                      <option value="./img/courses/web/2.jpg"/>
                      <option value="./img/courses/web/3.jpg"/>
                      <option value="./img/courses/web/4.jpg"/>
                      <option value="./img/courses/web/5.png"/>
                      <option value="./img/courses/web/6.png"/>
                      <option value="./img/courses/web/7.png"/>
                      <option value="./img/courses/web/8.png"/>
                      <option value="./img/courses/yoga/1.jpg"/>
                      <option value="./img/courses/yoga/2.jpg"/>
                    </datalist>
                  </div>
                  <button
                    type="submit"
                    onClick={handleAddNoteClick}
                    className="btn btn-block btn-theme m-0 btn-form"
                  >
                    Add Course
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddCourse;
