import React,{useState, useEffect }  from "react";

export default function Header(){
    const [menuIsOpen,setMenuIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () =>{
        setMenuIsOpen(prev => !prev);
    }
    

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY > 100;

            if (isTop) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return(
        <div className="hero-container" id="home">
            <video autoPlay loop muted >
                    <source src="./images/hero-video-bg.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
            <header>
                <nav className={ scrolled ? "scrolled" : "" }>
                <a className="nav-logo-container" href="./index.html"><img className="nav-logo" src="./images/logo.png" alt="logo" /></a> 
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#passion">Passion</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <svg width="40px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke={`${menuIsOpen? '#F0B7A1': '#fff'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>
                    </button>
                </nav>
                <div className="overlay">
                    <a href="./index.html"><img className="logo" src="./images/logo.png" alt="logo" /></a>
                    <div>
                        <h1>
                            Hi, I'm Juyan  Runatay
                        </h1>
                        <p className="line-break"></p>
                        <h2>
                            A Passionate Front-end Developer
                        </h2>
                    </div>
                    <div className="header-socials-container">
                        <ul>
                            <li><a href="https://github.com/jcrunatay"><img src="./images/socials/github.svg" alt="github icon" /></a></li>
                            <li><a href="https://www.linkedin.com/in/juyan-runatay-800171251/"><img src="./images/socials/linkedin.svg" alt="linkedin icon" /></a></li>
                            <li><a href="mailto:juyanrunatay@gmail.com"><img src="./images/socials/email.svg" alt="email icon" /></a></li>
                            <li><a href="https://www.facebook.com/jcrunatay"><img src="./images/socials/facebook.svg" alt="facebook icon" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={`overlay2 ${menuIsOpen ? 'overlay2--visible' : ''}`}>
                    <ul>
                        <li><a onClick={toggleMenu} href="#home">Home</a></li>
                        <li><a onClick={toggleMenu} href="#about">About</a></li>
                        <li><a onClick={toggleMenu} href="#experience">Experience</a></li>
                        <li><a onClick={toggleMenu} href="#passion">Passion</a></li>
                        <li><a onClick={toggleMenu} href="#projects">Projects</a></li>
                        <li><a onClick={toggleMenu} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
            <a href="#about" className="bottom-caret-btn">
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7066 1.47385L7.5 9.23483L0.293375 1.47385L1.02617 0.793396L7.5 7.76521L13.9738 0.793396L14.7066 1.47385ZM1.02617 6.2934L7.5 13.2652L13.9738 6.2934L14.7066 6.97385L7.5 14.7348L0.293375 6.97385L1.02617 6.2934Z" fill="#F0B7A1"/> </g>
                </svg>
            </a>
        </div>
    )
}