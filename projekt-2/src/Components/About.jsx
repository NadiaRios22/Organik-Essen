import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="About">
        <div className="About-left">
          <p>About us</p>
          <h1>
            Encouraging Peope To Live <br />A Healthier Lifestyle
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            nesciunt adipisci quisquam!
          </p>
          <button>Mehr...</button>
          <img
            className="Karrote"
            src="../../public/images/Screenshot-2023-12-08-203114.png"
            alt=""
          />
        </div>
        <div className="About-right">
          <img
            src="../../public/images/Screenshot 2023-12-08 203526.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
