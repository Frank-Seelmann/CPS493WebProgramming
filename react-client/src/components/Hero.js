import React from "react";

export default function Hero(props) {
    return (
        <section className="hero is-medium is-link">
            <div className="hero-body">
                <p className="title">
                    {props.title}
                </p>
                <p className="subtitle">
                    {props.subtitle}
                </p>
            </div>
        </section>
    );
}