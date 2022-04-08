import React from "react";
import "./Clients.css";
import { clients } from "../../data";

const Clients = () => {
    return (
        <section className="clients">
            <h1>Some of Our Clients</h1>

            <div className="clients__list">
                {clients.map((client, index) => (
                    <img
                        key={index}
                        src={client.img}
                        alt="client"
                        className={client.resize ? "resize" : ""}
                    />
                ))}
            </div>
        </section>
    );
};

export default Clients;
