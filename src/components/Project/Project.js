import React from 'react';
import './Project.css';

const Project = () => {
    return (
        <section className="project">
            <div className="project__container" style={{ background: "linear-gradient(to top right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('/assets/project_banner.png') no-repeat" }}>
                <h3>Let's Start a</h3>
                <h1>Project</h1>
                <h3>with us!</h3>
                <button>Send a Message</button>
            </div>
        </section>
    );
};

export default Project;