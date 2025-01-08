import React from 'react';
import "./Home.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { saveAs } from 'file-saver';
import { ReactTyped } from "react-typed";
import insta from './asserts/insta.png'
import gitup from './asserts/gitup.png'
import link from './asserts/link.png'
import pho from './asserts/guru.jpeg'
import css from './asserts/css.png'
import react from './asserts/react.png'
import exp from './asserts/exp.jpg'
import news from './asserts/news.jpg'
import java from './asserts/java.png'
import html from './asserts/html.png'
import Kotlin from './asserts/kotlin.png'
import c from './asserts/c.png'
import an from './asserts/andr.png'

export default function Home() {
    const handleDownload = () => {
      const fileUrl = 'file:///C:/Users/gurur/OneDrive/Documents/fresume.pdf';
      const fileName = 'Resume.pdf';  
      saveAs(fileUrl, fileName);
    };
  
    return (
      <div>
        {/* Home Section */}
        <div id="home" className="home-content">
          <div className="content">
            <h2>
              Hi, it's me <span style={{ color: "#00bcd4" }}>Gururaja J</span>
            </h2>
            <div>
              <h3>
                <ReactTyped
                  strings={[
                    "I am a Native Android App developer<br>and Software Developer",
                  ]}
                  typeSpeed={100}
                />
              </h3>
            </div>
            <div className="home-icons">
              <img src={insta} alt="Instagram" />
              <img src={gitup} alt="GitHub" />
              <img src={link} alt="LinkedIn" />
            </div>
            <div className="home-button">
              <button className="button" onClick={handleDownload}>
                Download CV <FaArrowRight/>
              </button>
            </div>
          </div>
          {/* <div className="home-image">
            <img src={pho} alt="Profile" />
          </div> */}
        </div>
  
        {/* Other Sections */}
        <div id="about" className="about-section">
          <h2  style={{color : 'black' }} className='about-head'><center>About Me</center></h2>
                <div className='about-container'>
                    <div className='about-content1'>
                <p> "Hello! My name is Guru, and I am currently pursuing my studies at Karpagam College. With a strong passion for technology and software development, 
                    I enjoy exploring new ideas and solving complex problems. My journey in the tech world began with a curiosity to understand how things work, 
                    and it has since evolved into a full-fledged passion for building innovative solutions."Apart from academics, I am deeply interested in learning about cutting-edge technologies,
                     including mobile app development, machine learning, and web development. I believe in continuous learning and strive to stay updated with the latest trends in the tech industry. My goal is to apply
                     my knowledge and skills to create meaningful projects that can positively impact people's lives.""</p>
                </div>
                <div className='about-content2'>
                <img src={pho} 
                alt="Guru" 
                className="about-image" />
                </div>
                </div>
          
        </div>
        <div id="projects" className="projects-section" style={{ backgroundColor: "#333", padding: "2rem" }}>
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "1.5rem" }}>Projects</h2>

      <div className="card-container">
        <div className="card1">
          <div className="card-content">
            <div className="card-front">
              <img src={news} alt="News App" />
              <h3>News App</h3>
            </div>
            <div className="short-description">
              <p>
                The News App provides real-time updates and curated news articles with a clean, modern design using Jetpack Compose.
              </p>
            </div>
            <div className="full-description">
              <p>
                The News App provides real-time updates and curated news articles with a clean, modern design using Jetpack Compose. Enjoy personalized content and seamless navigation for staying informed anytime, anywhere.
              </p>
              <button className="card1-btn">View Code &#8594;</button>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="card-content">
            <div className="card-front">
              <img src={exp} alt="Expense App" />
              <h3>Expense App</h3>
            </div>
            <div className="short-description">
              <p>
                The Expense App helps you track your spending effortlessly with a sleek design and predictive analytics.
              </p>
            </div>
            <div className="full-description">
              <p>
                The Expense App helps you track your spending effortlessly, featuring a sleek design with Jetpack Compose. Analyze expenses, gain insights, and plan better with predictive analytics and interactive graphs.
              </p>
              <button className="card1-btn">View Code &#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </div>

<div id="services" className="services-section">
  <h2 style={{ color: "White" }}>
    <center>Skills</center>
  </h2>
  <div className="Skills-container1">
    <div className="Skills-card1">
      <img src={html} alt="Skill 1" />
      <h2>HTML</h2>
      <h3>Pro</h3>
    </div>
    <div className="Skills-card2">
      <img src={css} alt="Skill 2" />
      <h2>CSS</h2>
      <h3>Intermediate</h3>
    </div>
    <div className="Skills-card3">
      <img src={react} alt="Skill 3" />
      <h2>React js</h2>
      <h3>Intermediate</h3>
    </div>
    <div className="Skills-card4">
      <img src={java} alt="Skill 4" />
      <h2>Java</h2>
      <h3>Intermediate</h3>
    </div>
    <div className="Skills-card5">
      <img src={c} alt="Skill 4" />
      <h2>C</h2>
      <h3>Intermediate</h3>
    </div>
    <div className="Skills-card6">
      <img src={an} alt="Skill 4" />
      <h2>Android Dev</h2>
      <h3>Intermediate</h3>
    </div>
    <div className="Skills-card7">
      <img src={Kotlin} alt="Skill 4" />
      <h2>Kotlin</h2>
      <h3>Intermediate</h3>
    </div>
  </div>
</div>

<div id="contact" className="contact-section">
  <h2>Contact</h2>
  <div className="contact-cont">
    <div className="contact-det">
      <h3>
        Hello, I am here! If you have any queries or want to speak with me, please fill out the form below.
      </h3>
      <p>
        Alternatively, feel free to reach out directly via email or phone. I’d love to hear from you!
      </p>
      <p><strong>Email:</strong> jgururaja2004@gmail.com</p>
      <p><strong>Phone:</strong> +91 9976185318</p>
    </div>
    <div className="contact-form">
      <form>
        <input type="text" placeholder="Name" aria-label="Name" required />
        <input type="email" placeholder="Email" aria-label="Email" required />
        <textarea
          placeholder="Your Message"
          aria-label="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</div>

      </div>
    );
  }
  