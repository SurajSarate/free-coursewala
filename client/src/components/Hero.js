import React from "react";


function Hero() {
  return (
    <div>
      <section className="banner-section d-flex align-items-center position-relative">
        <div className="bubble-animation">
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
          <div className="bubble-animation-item"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner-text">
                <h2 className="mb-3">
                  An investment in knowledge pays the best interest.
                </h2>
                <h1 className="mb-3 text-capitalize">
                  best online platform for learning.
                </h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, numquam! Obcaecati repellat non sed maxime!
                </p>
                <a href="#courses" className="btn btn-theme">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
              <div className="banner-img">
                <img src="../img/home.png  " alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
