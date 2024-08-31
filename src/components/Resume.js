import React from "react";

export default function Resume() {
    return (
        <section id="resume">
            <div className="resume-section-overlay"></div>
            <div className="resume-content-wrapper">
                <h4 className="resume-title">Check My Resume Out</h4>
                <a
                    className="resume-btn"
                    rel="noreferrer"
                    href="./images/document/Juyan-Criston-Runatay-Front-end-developer.pdf"
                    target="_blank"
                >
                    My Resume
                </a>
            </div>
        </section>
    );
}
