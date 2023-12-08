import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Passion from "./Passion";
import Resume from "./Resume";
import Contact from "./Contact";
export default function Main(){
    return (
            <main>
                <About />
                <Experience />
                <Passion/>
                <Projects />
                <Resume/>
                <Contact/>
            </main>
        
    )

}

/* useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold as needed
        };
    
        const observer = new IntersectionObserver(([entry],obs) => {
            if (entry.isIntersecting && !hasAnimated) {
                setIsVisible(true);
                setHasAnimated(true);
                obs.unobserve(entry.target);
            }
        }, options);
    
        if (divRef.current) {
            observer.observe(divRef.current);
        }

        // Store a reference to the current element to avoid warning
        const currentRef = divRef.current;
    
        return () => {
            if (currentRef) {
            observer.unobserve(currentRef);
            }
        };
        }, [hasAnimated]); */