import React from 'react';
import LazyHero from 'react-lazy-hero';
import '../style/Landing.css';
import { Link } from "react-router-dom";
import HeroImg from "../assets/beach-couple-hero.jpg";


const Landing = (props)=> {

    return (
        <div className="landing-container">
                <LazyHero className="lazy-hero" imageSrc={HeroImg} alt="Married couple at the beach during sunset">
            <div className="overlay">
                <div className="overlay-text">
                    {/* <h1>Vidly</h1> */}
                <section>
                <div className="vidly-ani loading08">
                    <span>V</span>
                    <span>I</span>
                    <span>D</span>
                    <span>L</span>
                    <span>Y</span>
                </div>
                </section>

                <Link to={"/registration"}>
                    <button className="register-page-link-btn ripple">Get Started</button>
                </Link>
                </div>
            </div>
                </LazyHero>
        </div>
    )
}



export default Landing