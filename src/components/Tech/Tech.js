import React, { useState } from 'react';
import './Tech.css'
import { techs } from '../../data';

const Tech = () => {


    const [category, setCategory] = useState(null);


    return (
        <section className="technologies">
            <h3>Our Preferred</h3>
            <h1>Technologies</h1>


            <div className="all__techs">
                <div className="tech__category">
                    <ul>
                        <li
                            className={!category ? 'category active' : 'category'}
                            onClick={() => setCategory(null)}>
                            All
                        </li>
                        <li
                            className={category === "frontend" ? "category active" : "category"}
                            onClick={() => setCategory('frontend')}>
                            Frontend
                        </li>
                        <li
                            className={category === "backend" ? "category active" : "category"}
                            onClick={() => setCategory('backend')}>
                            Backend
                        </li>
                        <li
                            className={category === "mobile" ? "category active" : "category"}
                            onClick={() => setCategory('mobile')}>
                            Mobile
                        </li>
                        <li
                            className={category === "devops" ? "category active" : "category"}
                            onClick={() => setCategory('devops')}>
                            Devops & Infra
                        </li>
                        <li
                            className={category === "database" ? "category active" : "category"}
                            onClick={() => setCategory('database')}>
                            Database
                        </li>
                    </ul>
                </div>

                <div className="tech__container">
                    {
                        category === null ? (
                            techs.map((tech, index) => (
                                <img key={index} src={tech.img} alt="" />
                            ))
                        ) : (
                            techs.filter((tech) => (
                                tech.tech.includes(category)
                            )).map((tech, index) => (
                                <img key={index} src={tech.img} alt="" />
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Tech;