import React,{useState,useContext} from "react";
import CourseContext from "../context/course/courseContext";

function ContactUs() {
  const context = useContext(CourseContext);
  const { sendMessage } = context;
  const [input, setinput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleAddNoteClick = (e) => {
    e.preventDefault();
    sendMessage(
      input.name,
      input.email,
      input.phone,
      input.message
    );
    setinput({ name: "", email: "", phone: "", message: ""});
  };
  const onChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="main-wrapper">
        <section className="contact-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="./img/Saly-2.png" alt="" />
              </div>
              <div className="col-md-6">
                <div className="contact-form box">
                  <h2 className="form-title text-center">Leave a Message</h2>
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={input.name}
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        id="phone"
                        name="phone"
                        value={input.phone}
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        id="message"
                        name="message"
                        value={input.message}
                        onChange={onChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      onClick={handleAddNoteClick}
                      className="btn m-1 btn-block btn-theme btn-form"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
