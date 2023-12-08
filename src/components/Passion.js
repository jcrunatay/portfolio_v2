import React, { useRef, useState } from 'react';
import SectionAnimation from './SectionAnimation';

export default function Passion(){

    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const divRef = useRef(null);

    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
    const headingRef = useRef(null);
    return(
        <section id="passion" className="dark-section">
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
            <h2 ref={headingRef} className={`title section-title ${isTitleVisible ? "section-title-animate" : ""}`}><span className="dark-title-line title-line"></span>Passion<span className="dark-title-line title-line"></span></h2>
            <div>
            <div ref={divRef} className={`div div1 ${isVisible ? "animate1" : ""}`}>
                <h3>Building Engaging Websites and User Interfaces</h3>
                    <div className={`passion-content-container div div1 ${isVisible ? "animate1" : ""}`}  >
                        <div className="design passion-item">
                            <div className="img-wrapper">
                                <img src="./images/design.svg" alt="design icon" />
                            </div>
                            <h4>DESIGN</h4>
                            <p>
                                I love making websites visually appealing. I choose colors, fonts, and layouts that make it easy and pleasant for users to navigate.Adding animations and interactive elements to websites keeps users engaged and makes the browsing experience more enjoyable.
                            </p>
                        </div>

                        <div className="development passion-item">
                            <div  className="img-wrapper">
                                <img src="./images/development.svg" alt="development icon" />
                            </div>
                            <h4>DEVELOPMENT</h4>
                            <p>
                                I have expertise in HTML, CSS, and JavaScript and other frameworks like Bootstrap and React. I use these languages and frameworks to write the clean code that bring designs to life on the web.I ensure that  websites will look and function well on mobiles, tablets, and desktops by implementing responsive design principles.
                            </p>
                        </div>

                        <div className="collaboration passion-item">
                            <div className="img-wrapper">
                                <img src="./images/collaboration.svg" alt="collaboration icon" />
                            </div>
                            <h4>COLLABORATION</h4>
                            <p className="what-i-do-description">
                                I enjoy collaborating with designers and developers to create websites that combine great design with smooth functionality.I'm always learning about new technologies and techniques to improve my skills and bring fresh ideas to my projects.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}