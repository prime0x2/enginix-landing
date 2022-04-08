import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__content__left">
                        <img src="/assets/logo_white.png" alt="" />
                        <p>
                            We strive to build something that really matters in
                            the technology world and make some impacts!
                        </p>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-facebook-square"></i>
                    </div>
                    <div className="footer__content__right">
                        <div>
                            <i className="fa-solid fa-phone"></i>
                            <span>+8801624131260</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <span>enginix.tech@gmail.com</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    All rights reserved to{" "}
                    <a href="/" target="_blank">
                        Enginix Technologies
                    </a>
                    . Designed By{" "}
                    <a href="https://github.com/prime0x2" target="_blank">
                        M. Prime
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
