import React, { useRef, useState } from "react";
import SectionAnimation from "./SectionAnimation";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const divRef = useRef(null);

    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
    const headingRef = useRef(null);

    return (
        <section id="about" className="light-section">
            <SectionAnimation
                hasAnimated={hasAnimated}
                setIsVisible={setIsVisible}
                setHasAnimated={setHasAnimated}
                elementRef={divRef}
                threshold={0.2}
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
                <span className="light-title-line title-line"></span>About Me
                <span className="light-title-line title-line"></span>
            </h2>
            <div
                className={`about-content-container div div1 ${isVisible ? "animate1" : ""}`}
                ref={divRef}
            >
                <div className="about-leftDiv">
                    <img className="profile" src="./images/profile-no-bg.png" alt="profile" />
                </div>
                <div className="about-rightDiv">
                    <div className="bio-container">
                        <p className="bio-text">
                            <span className="bio-text-highlight">
                                Hello! I'm Juyan Criston Runatay,{" "}
                            </span>
                            a passionate <strong>Front-End Web Developer</strong> with experience of
                            crafting{" "}
                            <strong>user-friendly, engaging, and responsive websites</strong>. I
                            collaborate with different <i>designers</i> and <i>tech folks </i>to
                            make sure the websites not only work well but also look nice. Learning
                            new things about web development is something I always do. Whether it's
                            making websites load faster or making them accessible to everyone, I'm
                            committed to making the web a friendlier and better place for everyone.
                        </p>

                        <p className="bio-text">
                            <strong>Outside of coding</strong>, I like playing computer games,
                            relaxing with some music or playing some sports.
                        </p>

                        <p className="bio-text">
                            I'm excited about the endless possibilities of web development and am
                            dedicated to creating wonderful user friendly websites. Let's connect
                            and collaborate to bring your web projects to life!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} /*  */
