import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about">
            <h1>About</h1>
            <img src="/images/logo.svg" alt="logo" />
            <p>
                Enginix Technologies offers a variety of value-adding solutions
                and best-of-breed services to internet companies worldwide. Our
                comprehensive range of products and services includes Product
                Design (UI/UX), Mobile App Development, Web Development, System
                Analysis & Software Quality Assurance.
            </p>
            <button>Contact Us</button>
        </section>
    );
};

export default About;
