import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import './Home.css';

const Home = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('aria-valuenow');
      bar.style.setProperty('--progress-width', `${value}%`);
      bar.classList.add('animate');
    });
  }, []);

  return (
    <>
      <Nav />
      <div className="items-center centers" id="home">
        <div className="about-content" id="about">
          <div className="">
            <div>
              <h1 className="about-heading">About Me</h1>
              <img className="img1" src="https://i.postimg.cc/Hx4nChpH/fbavatar-1630400663387-6838396024049256103.png" alt="image" />
            </div>
            <p>
              I am 21 years old and have completed my Bachelor's Degree in Computer Engineering from IET DAVV University, Indore.
              I really enjoy solving problems and making things aesthetically pleasing and easy to use. I can't stop learning new
              things; the more, the better.
            </p>
          </div>
        </div>
      </div>

      <div>
        <section className="project-section active" id="projects">
          <hr />
          <h1 className="project-heading">Some Of My Projects</h1>

          <div className="project-container">
            <div className="project-card">
              <div className="project-content">
                <h1 className="project-title">Airfly-Easy</h1>
                <p className="project-info">
                  Developed an airline reservation system using React.js for the front-end, Node.js for the
                  back-end, and MongoDB(database) to optimize user experience and streamline operations.
                  <a href="https://sohanbodana.github.io/Facebook_c/">link</a>
                </p>
                <div className="project-btn-grp">
                  <a href="https://github.com/sohanbodana/Airfly-Easy"> <button className="project-btn github">github
                    repo</button> </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h1 className="project-title">LiveTracker Covid19</h1>
                <p className="project-info">
                  This project is a COVID-19 live data tracking application. It provides real-time updates and statistics
                  related to the COVID-19 pandemic, including the number of confirmed cases, deaths, and recoveries
                  globally or for specific regions. <br />
                  <a href="https://sohanbodana.github.io/Livetrack-Covid19/">link</a>
                </p>
                <div className="project-btn-grp">
                  <a href="https://github.com/sohanbodana/Livetrack-Covid19"> <button className="project-btn github">github repo</button> </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h1 className="project-title">Facebook_c</h1>
                <p class="project-info">
                  Our project is a Facebook login page implementation, which enables users to log into their Facebook
                  accounts. It involves designing and coding that includes the necessary fields and
                  components for users to input their login credentials, such as username or email address and password.
                  <a href="https://sohanbodana.github.io/Facebook_c/">link</a>
                </p>
                <div className="project-btn-grp">
                  <a href="https://github.com/sohanbodana/Facebook_c"> <button className="project-btn github">github repo</button> </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h1 className="project-title">ShopEZ</h1>
                <p className="project-info">
                  E-commerce website (ShopEZ)– HTML,CSS ,JAVASCRIPT, REACT.JS, AND API.
                  • Designed and developed an e-commerce website using HTML, CSS, and React.js,with a
                  primary focus on fetching products data through APIs.leveraged React.js for its dynamic
                  user interface,providing seamless navigation and enhanced user experience <br />
                  <a href="https://github.com/sohanbodana/ShopEZ">link</a>
                </p>
                <div className="project-btn-grp">
                  <a href="https://github.com/sohanbodana/ShopEZ"> <button className="project-btn github">github repo</button> </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-content">
                <h1 className="project-title">WeatherApp-Live</h1>
                <p className="project-info">
                  Real-Time Weather Data:
                  Get instant access to up-to-date weather information including temperature, humidity, wind speed, and more, sourced from a reliable weather API.<br />
                  <a href="https://github.com/sohanbodana/weatherapp">link</a>
                </p>
                <div className="project-btn-grp">
                  <a href="https://github.com/sohanbodana/weatherapp"> <button className="project-btn github">github repo</button> </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* <!-- skills --> */}
      <div className="skill-section" id="skills">
        <h1 className="heading">Skills</h1>
        <div className="skills-content">

          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">HTML <i className="val">100%</i></span>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">CSS <i className="val">90%</i></span>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">JavaScript <i className="val">75%</i></span>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar a1" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">React.Js <i className="val">70%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar a2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">Expressjs <i className="val">75%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar a3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">Nodejs <i className="val">75%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar  a4" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">MongoDB <i className="val">80%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar  a5" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">MySql <i className="val">90%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar  a6" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <span className="skill">BootStrap<i className="val">90%</i></span>
            </div>
          </div>
        </div>
      </div>
      <hr /> <br />
      {/* <!-- contact  --> */}
      <div className="contact" id="contact-me">
        <div className="container">
          <div className="contact-content">
            <h2>Contact Me</h2>
            <p className="mail">
              Get in touch with me <i className="fas fa-arrow-right"></i> sohanbodana27@gmail.com
            </p>
            <p className="links">Or find me on:</p>
            <a href="https://www.linkedin.com/in/sohan-bodana-08729b229" target="_blank"><i className="fab fa-linkedin">
              Linkedin</i></a>
            <a href="https://github.com/sohanbodana" target="_blank"><i className="fab fa-github"></i> Github</a>
            <a href="#" ><i className="fab fa-dev"></i> Dev Community</a>
            <a href="#" ><i className="fab fa-twitter"> Twitter</i></a>
            <a href="https://www.instagram.com/mr.sohanb/" target="_blank"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
