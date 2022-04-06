import React from 'react';
import './Team.css';
import { members } from '../../data'

const Team = () => {
    return (
        <section className="team">
            <h1>Out Team</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Adipiscing aliquam enim mi libero nisi vitae ipsum.
            </p>

            <div className="team__members">
                {
                    members.map((member, index) => (
                        <div className="member__single" key={index}>
                            <img src={member.img} alt="" />
                            <h1>{member.name}</h1>
                            <h3>{member.role}</h3>
                            <p>
                                Massa turpis vitae, justo. Commodo diam consectetur nunc eget suspendisse. Mattis velit, pellentesque tristique tincidunt eget in.
                            </p>
                            <div className="member__social">
                                <button>
                                    <i class="fa-brands fa-linkedin"></i>
                                </button>
                                <button>
                                    <i class="fa-solid fa-envelope"></i>
                                </button>
                                <button>
                                    <i class="fa-brands fa-facebook-square"></i>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Team;