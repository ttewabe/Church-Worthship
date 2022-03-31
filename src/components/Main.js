import React from "react"
import reactLogo from "../images/myImg.jpeg"

export default function Main() {
    return(
     <main>
         <div class="container-fluid">
         <div class="row">
         <img src={reactLogo}  alt="React Logo" className="img--icon" />
         </div>
         <div class="row">
         <h3 className="main--name">Tewabe Tadege</h3>
        <h4 class="main--h6">Full stack Web-Developer</h4>
        </div>
        <div class="row my-bus">
        <a role="button" class="btn btn-link st-plink" href="tel:+1-xxx-555-5555"><i class="fa fa-phone fa-lg text-primary"></i></a>
        <a role="button" class="btn btn-link st-plink1 " href="mailto:tomtadege@gmail.com"><i class="bi bi-envelope"></i></a>
        </div>
        <div class="row">
        <h1 className="main--title">About</h1>
        <p className="main--facts"> MSc Degree in Chemical Engineering,and Certified Full Stack Web Developer.The skills, tools and technologies I use to bring your products to life:HTML5, CSS3, JavaScript, jQuery, React, Git, Github, RESTful APIs,SASS, Command Line, VS Code.</p>
        <h1 className="main--title">Interests</h1>
        <p className="main--facts"> I'm passionate about bringing both the technical and visual aspects of digital products to life.I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.</p>
        </div>
        </div>
    </main>
   ) 
}