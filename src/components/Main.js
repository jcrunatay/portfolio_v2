import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Passion from "./Passion";
import Resume from "./Resume";
import Contact from "./Contact";
export default function Main() {
    return (
        <main>
            <About />
            <Experience />
            <Passion />
            <Projects />
            <Resume />
            <Contact />
        </main>
    );
}
