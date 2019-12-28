import React from 'react';
import '../style/About.css';
// import aboutVideo from "../assets/couple-hot-air-balloon-video.mp4";
import AboutImg from '../assets/beach-couple-daylight-lift.jpg';


const About = () => {

    return (
        <div className="about-container">
            {/* Video here */}
            {/* <div className="about-vid-banner">
                <video autoPlay="autoplay" loop muted="muted" playsInline>
                    <source src={aboutVideo} type="video/mp4" />
                    Your browser does not support the video.
                </video>
            </div>
            <div className="about-vid-overlay">
                <h1 className="about-title">Capturing your Special Moments for a Lifetime</h1>
            </div> */}
            <div className="about-vid-overlay">
                <img src={AboutImg} className="about-banner" alt="man lifting his partner in the air while at the beach"></img>
            </div>

            <div className="about-content">
                <div className="about-header">About Us</div>
                    <p className="about-text">Vidly strives to create special moments by connecting customers to professional videographers. You can have a stress-free vacation by booking a local videographer in your next travel plan.
                    </p>
            </div>
            <div className="about-content-two">
                <div className="about-header-two">Founder</div>
                <div className="user one" alt="founder profile picture"/>
                    <p className="about-text-two">
                        As a part-time videographer, Marc (The Founder) noticed there was a lack of trustworthy online platforms to market your video services. I wanted to create a credible site for travellers who like to document their journeys, save, and share timeless moments.
                    </p>
            </div>

        </div>
    )
}



export default About