import React from "react";
import "./Process.css";

const Process = () => {
    return (
        <section className="process">
            <h1>
                The Effective <br />
                Process we follow
            </h1>
            <p>
                We abide by a unique way of approach to minimize the timeframe &
                to maximize productivity, and efficiency.
            </p>

            <div className="processes">
                <div className="dot-bar"></div>
                <div className="process__step">
                    <div className="process__icon">
                        <img src="/images/process/1.png" alt="" />
                    </div>
                    <h1>Understand</h1>
                    <p>
                        We acknowledge your vision and requirements to translate
                        them into your desired digital products that meets your
                        business goal.
                    </p>
                </div>

                <div className="process__step">
                    <div className="process__icon">
                        <img src="/images/process/2.png" alt="" />
                    </div>
                    <h1>Design</h1>
                    <p>
                        Perceiving your requirements, our team designs the
                        product through wireframing, prototyping and user
                        testing.
                    </p>
                </div>

                <div className="process__step">
                    <div className="process__icon">
                        <img src="/images/process/3.png" alt="" />
                    </div>
                    <h1>Develop</h1>
                    <p>
                        According to the design our innovative team of
                        developers develops the entire product with absolute
                        quality assurance.
                    </p>
                </div>

                <div className="process__step">
                    <div className="process__icon">
                        <img src="/images/process/4.png" alt="" />
                    </div>
                    <h1>Delivery</h1>
                    <p>
                        Once the final product is ready with no errors, we
                        deliver you your desired digital product to boost your
                        digital journey.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Process;
