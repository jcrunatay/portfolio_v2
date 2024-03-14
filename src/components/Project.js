import React, { useRef, useState } from "react";
import SectionAnimation from "./SectionAnimation";

export default function Project(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const divRef = useRef(null);

    const tools = props.project_tools.map((item) => {
        return <button className="project-tool">{item}</button>;
    });

    return (
        <>
            <SectionAnimation
                hasAnimated={hasAnimated}
                setIsVisible={setIsVisible}
                setHasAnimated={setHasAnimated}
                elementRef={divRef}
                threshold={0.5}
            />
            <div ref={divRef} className={`project div div2 ${isVisible ? "animate2" : ""}`}>
                <h3 className="project-title">{props.project_title}</h3>
                <div className="project-image-container">
                    <img
                        className="desktop-img"
                        src={`${props.project_src_desktop}`}
                        alt="desktop project img"
                    />
                    <img
                        className="mobile-img"
                        src={`${props.project_src_mobile}`}
                        alt="mobile project img"
                    />
                </div>
                <div className="project-tools-container">{tools}</div>
                <p className="project-description">{props.project_description}</p>
                <div className="view-code-container">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="project-link"
                        href={`${props.project_link_demo}`}
                    >
                        View Project
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="project-link"
                        href={`${props.project_link_code}`}
                    >
                        View Code
                    </a>
                </div>
            </div>
        </>
    );
}
