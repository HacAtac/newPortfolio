import React from "react";
//import devImage from "../../assets/small/portraits/0.jpg";
import devImage from "../../assets/small/portraits/pic.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about" className="px-2">
        Who am I?
      </h1>
      <div className="dev-image-container">
        <img
          id="dev-image"
          src={devImage}
          className="devImage"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            borderRadius: "25%",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#f3a847",
          }}
          alt="dev"
        />
      </div>

      <p className="px-2">
        My professional career started in sales and customer service. This
        helped me understand the consumers' expectations in the scope of what is
        feasible and marketable in today's digital environment.
      </p>
      <br></br>
      <p className="px-2">
        I am an experienced full stack developer with a passion for learning and
        problem solving. I am currently employeed as a Full Stack Software
        Engineer at Salt Shaker Systems. My role here is to develop, test,
        refactor, document, and maintain multiple applications. I'm well versed
        in Full Stack Javascript with the latest techonolgies, and I also know a
        bit of Python and C#. I'm constantly learning new technologies and
        frameworks to improve my skills.
        <a
          href="https://www.saltshakermedia.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-purple-500"> Salt Shaker Systems</span>
        </a>
      </p>
      <br></br>
      <p className="px-2">
        My current mindset: always be learning and always be a problem-solver. I
        am always looking for new challenges and opportunities to grow as a
        developer. I am eager to join a new team. Let's see if we're a match!
      </p>
    </section>
  );
}

export default About;
