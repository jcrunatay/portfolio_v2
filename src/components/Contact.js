import React, { useRef, useState } from 'react';
import SectionAnimation from './SectionAnimation';

export default function Contact(){
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const divRef = useRef(null);

    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
    const headingRef = useRef(null);
    return(
        <section id='contact' className='light-section'>
            <SectionAnimation 
                hasAnimated={hasAnimated} 
                setIsVisible={setIsVisible} 
                setHasAnimated={setHasAnimated} 
                elementRef={divRef}
                threshold={0.5}
            />
            <SectionAnimation 
                hasAnimated={hasTitleAnimated} 
                setIsVisible={setIsTitleVisible} 
                setHasAnimated={setHasTitleAnimated} 
                elementRef={headingRef}
                threshold={0.8}
            />
            <h2 ref={headingRef} className={`title section-title ${isTitleVisible ? "section-title-animate" : ""}`}><span className="light-title-line title-line"></span>Get In Touch<span className="light-title-line title-line"></span></h2>
            <div ref={divRef} className={`contact-content-wrapper div div1 ${isVisible ? "animate1" : ""}`}>
                <p className='contact-text'>
                    Thank you for visiting my portfolio! If you have any inquiries, opportunities, or just want to say hello, feel free to reach me.
                </p>
                <p className='contact-text'>
                    I'm always open to connecting and discussing potential collaborations, projects, or any questions you might have. Looking forward to hearing from you!
                </p>
                <div id='send-email-container'>
                    <a id='email-btn' href="mailto:juyanrunatay@gmail.com"> Say Hello </a><br/>
                    <img id='send-email-img' src="./portfolio_v2/images/send-email.svg" alt="email" />
                </div>
            </div>
        </section>
    )

}
