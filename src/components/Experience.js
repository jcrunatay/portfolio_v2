import React, { useRef, useState } from "react";
import SectionAnimation from "./SectionAnimation";

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const divRef = useRef(null);

    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
    const headingRef = useRef(null);

    return (
        <section id="experience" className="dark-section">
            <SectionAnimation
                hasAnimated={hasAnimated}
                setIsVisible={setIsVisible}
                setHasAnimated={setHasAnimated}
                elementRef={divRef}
                threshold={0.05}
            />
            <SectionAnimation
                hasAnimated={hasTitleAnimated}
                setIsVisible={setIsTitleVisible}
                setHasAnimated={setHasTitleAnimated}
                elementRef={headingRef}
                threshold={0.8}
            />
            <h2
                ref={headingRef}
                className={`title section-title ${isTitleVisible ? "section-title-animate" : ""}`}
            >
                <span className="dark-title-line title-line"></span>Experience
                <span className="dark-title-line title-line"></span>
            </h2>
            <div className={`div div1 ${isVisible ? "animate1" : ""}`} ref={divRef}>
                <div className="skills-work-main-container">
                    <div className="skills-content-container">
                        <img
                            className="experience-logo"
                            src="./images/development-skills.svg"
                            alt="development img"
                        />
                        <h3 className="development-skills-title">SKILLS AND TOOLS</h3>
                        <p className="description">
                            I've been programming and focusing on front-end development for almost 2
                            years now and I'm still eager to learn and further my skills in this
                            kind of field.
                        </p>
                    </div>
                    <div className="skill-icon-container">
                        <button>Bootstrap</button>
                        <button>Css</button>
                        <button>Git</button>
                        <button>Html</button>
                        <button>Jquery</button>
                        <button>Javascript</button>
                        <button>Mysql</button>
                        <button>Php</button>
                        <button>React</button>
                        <button>Tailwindcss</button>
                        <button>Webpack</button>
                        <button>Figma</button>
                    </div>
                    <div className="work-content-container">
                        <img
                            className="experience-logo"
                            src="./images/company.svg"
                            alt="past work logo img"
                        />
                        <h3 className="past-work-title">WHEN IN INTERNSHIP</h3>
                        <p className="description ">
                            As a front-end developer intern, my role revolves around crafting the
                            visible parts of websites or web applications that users interact with.
                            Here are some things I did:
                        </p>
                    </div>
                    <div className="work-description-container">
                        <p className="responsibilities-text">
                            <strong>Creating Web Pages:</strong>I wrote code using languages like
                            HTML, CSS, and JavaScript and also Bootstrap framework to bring designs
                            to life. This involves building the layout, styling elements, and making
                            things interactive.
                        </p>
                        <p className="responsibilities-text">
                            <strong>Working on Designs:</strong>I collaborated closely with the
                            designer to turn their visual concepts into functional and appealing web
                            pages. It was exciting to see designs come to life on the screen!
                        </p>
                        <p className="responsibilities-text">
                            <strong>Testing and Fixing Issues:</strong> I help test websites on
                            different browsers and devices to ensure everything looks and works
                            well. When I find bugs or glitches, I dove into troubleshooting and
                            fixing them to make sure users have a smooth experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} /*  */
