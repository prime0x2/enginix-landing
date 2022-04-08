import React from "react";
import "./Team.css";
import { members } from "../../data";

const Team = () => {
    return (
        <section className="team">
            <h1>Meet The Team</h1>
            <p>
                Enginix owns a team of some enthusiastic, and passionate people
                in their respective fields. Our team believes in absolute
                quality. Get a glance of the team
            </p>

            <div className="team__members">
                {members.map((member, index) => (
                    <div className="member__single" key={index}>
                        <div className="member__info">
                            <img src={member.img} alt="" />
                            <h1>{member.name}</h1>
                            <h3>{member.role}</h3>
                            <p>{member.description}</p>
                        </div>
                        <div className="member__social">
                            <button>
                                <i className="fa-brands fa-linkedin"></i>
                            </button>
                            <button>
                                <i className="fa-solid fa-envelope"></i>
                            </button>
                            <button>
                                <i className="fa-brands fa-facebook-square"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
