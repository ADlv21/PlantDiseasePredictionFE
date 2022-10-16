import React from "react";
import "./About.css";
import Detect from "./img/detectimg.png";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={Detect} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Detect Disease Today</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Plant diseases and pests are important factors determining the
                yield and quality of plants. Plant diseases and pests
                identification can be carried out by means of digital image
                processing. In recent years, deep learning has made
                breakthroughs in the field of digital image processing, far
                superior to traditional methods.
              </p>
              <p className="about__text p__color">
                Diagnosis is one of the most important aspects of a plant
                pathologist's training. Without proper identification of the
                disease and the disease-causing agent, disease control measures
                can be a waste of time and money and can lead to further plant
                losses.Proper disease diagnosis is therefore vital.
              </p>

              <div className="about__button d__flex align__items__center">
                {/* <a href="#">
                  <button className="about btn pointer">Upload Image</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
