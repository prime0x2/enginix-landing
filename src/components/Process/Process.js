import React from 'react';
import './Process.css'

const Process = () => {
    return (
        <section className="process">
            <h1>The Effective <br />Process we follow</h1>
            <p>
                We abide by a unique way of approach to minimize the
                <br />
                timeframe & to maximize productivity, and efficiency.
            </p>

            <div className="processes">
                <div className="dot-bar"></div>
                <div className="process__step">
                    <div className="process__icon">
                        <img src="/assets/process/1.png" alt="" /></div>
                    <h1>Understand</h1>
                    <p>
                        In this phase we acknowledge your vision, needs, and demands to translate them into your desired digital products.
                    </p>
                </div>

                <div className="process__step">
                    <div className="process__icon">
                        <img src="/assets/process/2.png" alt="" /></div>
                    <h1>Design</h1>
                    <p>
                        Understanding your vision & needs, our product team designs the product through visualizing, prototyping and user testing.
                    </p>
                </div>

                <div className="process__step">
                    <div className="process__icon">
                        <img src="/assets/process/3.png" alt="" /></div>
                    <h1>Develop</h1>
                    <p>
                        Our innovative team of developers develops the entire product with absolute quality assurance, following the final design.
                    </p>
                </div>

                <div className="process__step">
                    <div className="process__icon">
                        <img src="/assets/process/4.png" alt="" /></div>
                    <h1>Delivery</h1>
                    <p>
                        Once the final product is ready with no errors, we deliver you your desired digital product to boost your digital journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Process;