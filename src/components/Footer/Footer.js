import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__content__left">
                        <img src="/assets/logo_white.png" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh posuere elit, felis amet, dictum condimentum sed magna. Et ac varius vitae tempus enim, ipsum. </p>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook-square"></i>
                    </div>
                    <div className="footer__content__right">
                        <div>
                            <i class="fa-solid fa-phone"></i>
                            <span>+8801624131260</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                            <span>enginix.tech@gmail.com</span>
                        </div>
                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    All rights reserved to <a href="/" target="_blank">Enginix Technologies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;