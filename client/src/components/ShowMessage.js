import React, { useContext } from "react";
import CourseContext from "../context/course/courseContext";
function ShowMessage() {
  const context = useContext(CourseContext);
  const { deleteMessage, contact } = context;
  return (
    <div>
      <div className="main-wrapper">
        <section className="courses-section section-padding">
          <div className="container">
            <div className="row justify-content-center">
              {contact.map((msg) => {
                return (
                  <div className="card m-2 course-box text-wrap" style={{ maxHeight:"90%",maxWidth: "80%" }}>
                    <div className="card-body">
                      <h5 className="card-title">{msg.name}</h5>
                      <div className="inner-card d-flex justify-content-between align-items-center">
                        <p style={{maxWidth:"95%",maxHeight:"60px",overflow:"auto"}}className="card-text">{msg.message}</p>
                        <i
                          onClick={() => deleteMessage(msg._id)}
                          className="far del fa-trash-alt"
                        ></i>
                      </div>
                      <h6>{msg.email}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShowMessage;
