import React from 'react';
import './Portfolio.css';
import { portfolios } from '../../data'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Adipiscing aliquam enim mi libero nisi vitae ipsum.
            </p>

            <div className="portfolio__list">
                {
                    portfolios.map((item, index) => (
                        <div className="portfolio__item" key={index}>
                            <img src={item.cover} alt="" />
                            <div className="portfolio__item__body">
                                <h1>{item.title}</h1>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    <br />
                                    consectetur adipiscing elit. Adipiscing
                                    <br />
                                    aliquam enim mi libero nisi vitae ipsum.
                                </p>
                                <img src={item.logo} alt="" className={item.resize ? 'resize logo' : 'logo'} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Portfolio;