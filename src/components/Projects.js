import React, { useRef, useState } from "react";
import SectionAnimation from "./SectionAnimation";
import Project from "./Project";

export default function Projects() {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
    const headingRef = useRef(null);
    return (
        <section id="projects" className="dark-section">
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
                <span className="dark-title-line title-line"></span>Projects
                <span className="dark-title-line title-line"></span>
            </h2>
            <div className="projects-container">
                <Project
                    project_title="Web Content Management System"
                    project_src_desktop="./images/project-images/cms_desktop.png"
                    project_src_mobile="./images/project-images/cms_mobile.png"
                    project_description="Web Content Management System is a software system that provides website authoring, collaboration, and administration tools designed to allow users with little knowledge of web programming languages or markup languages to create and manage website content with relative ease. Demo: username & password: juyan24"
                    project_tools={["Bootstrap", "MySql", "Php", "Html", "Css", "Javascript"]}
                    project_link_demo="http://juyan-runatay.infinityfreeapp.com/M5P/"
                    project_link_code="https://github.com/jcrunatay/Group-Project"
                />
                <Project
                    project_title="ShopStyle"
                    project_src_desktop="./images/project-images/shopstyle_desktop.png"
                    project_src_mobile="./images/project-images/shopstyle_mobile.png"
                    project_description="ShopStyle is an e-commerce platform built with React, Sass, and Redux, providing a seamless shopping experience. The app uses Firebase for user authentication, ensuring secure access. It features a variety of products from the Fake Store API, allowing users to browse and purchase items across different categories."
                    project_tools={["React", "Sass", "Redux", "Firebase"]}
                    project_link_demo="https://poetic-salmiakki-9f7c48.netlify.app/"
                    project_link_code="https://github.com/jcrunatay/shop_style"
                />
                <Project
                    project_title="DevFinder"
                    project_src_desktop="./images/project-images/devfinder_desktop.png"
                    project_src_mobile="./images/project-images/devfinder_mobile.png"
                    project_description="DevFinder is an app where you can search github users by their username and information such as name, number of repos, location and others will be displayed."
                    project_tools={["Html", "Tailwindcss", "Javascript", "Api"]}
                    project_link_demo="https://jcrunatay.github.io/devfinder/"
                    project_link_code="https://github.com/jcrunatay/devfinder"
                />
                <Project
                    project_title="Mini-Chat"
                    project_src_desktop="./images/project-images/mini_chat_desktop.png"
                    project_src_mobile="./images/project-images/mini_chat_mobile.png"
                    project_description="An application where users can register and join the public group chat. New users will be able to see even the old chat in the group.It's a good app in discussing a speficic topic."
                    project_tools={["Bootstrap", "MySql", "Php", "Html", "Css", "Javascript"]}
                    project_link_demo="http://juyan-runatay.infinityfreeapp.com/M4/Mini-Chat/lab2.php"
                    project_link_code="https://github.com/jcrunatay/Mini-Chat"
                />
                <Project
                    project_title="TheWatchMovies"
                    project_src_desktop="./images/project-images/movie_app_desktop.png"
                    project_src_mobile="./images/project-images/movie_app_mobile.png"
                    project_description="TheWatchMovies is an app where you can watch movie trailers and get all the details about the movies, like the cast, story, and genre. It's built using React, Tailwind CSS, an API for movie data, and Firebase. The app is designed to be easy to use and works well on any device."
                    project_tools={["React", "Tailwindcss", "Api", "Firebase"]}
                    project_link_demo="https://jcrunatay.github.io/movie_app/"
                    project_link_code="https://github.com/jcrunatay/movie_app"
                />
                <Project
                    project_title="Portfolio V1"
                    project_src_desktop="./images/project-images/portfolio_v1_desktop.png"
                    project_src_mobile="./images/project-images/portfolio_v1_mobile.png"
                    project_description="Portfolio V1 is my very first portfolio that I created before my internship.It shows  how  my interest in programming started. Created this to practice more in Bootstrap and responsive web design."
                    project_tools={["Html", "Css", "Javascript", "Bootstrap"]}
                    project_link_demo="https://jcrunatay.github.io/Portfolio/"
                    project_link_code="https://github.com/jcrunatay/movie_app"
                />
                <Project
                    project_title="Public Feedback"
                    project_src_desktop="./images/project-images/public_feedback_desktop.png"
                    project_src_mobile="./images/project-images/public_feedback_mobile.png"
                    project_description="With this app, users can insert a feedback by using hastag to refer to the company e.g(#Tim's) then it will show to the public feedback and other users will be able to see it."
                    project_tools={["Html", "Css", "Javascript", "Bootstrap", "Api"]}
                    project_link_demo="https://jcrunatay.github.io/Public_feedback/"
                    project_link_code="https://github.com/jcrunatay/Public_feedback"
                />
                <Project
                    project_title="Punchbag"
                    project_src_desktop="./images/project-images/punchbag_desktop.png"
                    project_src_mobile="./images/project-images/punchbag_mobile.png"
                    project_description="Punchbag is a game app where user can select or add their own character(avatar) and play the game.When a character is hit, the HP goes down by 5points and the opponent's hp goes up by 3points.If character does a 3hit combo, it won't be able to hit for 5seconds."
                    project_tools={["Html", "Php", "Javascript", "Bootstrap", "MySql", "Css"]}
                    project_link_demo="http://juyan-runatay.infinityfreeapp.com/M4/Punch-Bag/"
                    project_link_code="https://github.com/jcrunatay/punch_bag"
                />
                {/* <Project
                    project_title="Rock-Paper-Scissors"
                    project_src_desktop="./images/project-images/rps_desktop.png"
                    project_src_mobile="./images/project-images/rps_mobile.png"
                    project_description='The Rock-Paper-Scissors game is a simple hand game usually played between two people where each player simultaneously forms one of three shapes with their hand. The possible shapes are "rock" (a closed fist), "paper" (an open hand), and "scissors" (a fist with the index and middle fingers extended, forming a V).'
                    project_tools={["Html", "Javascript", "Bootstrap", "Css"]}
                    project_link_demo="https://jcrunatay.github.io/Rock-_Paper_Scissors/"
                    project_link_code="https://github.com/jcrunatay/Rock-_Paper_Scissors"
                /> */}
                <Project
                    project_title="Where in the world ?"
                    project_src_desktop="./images/project-images/search_country_desktop.png"
                    project_src_mobile="./images/project-images/search_country_mobile.png"
                    project_description="Where in the World is an app that lets you search for any country and view detailed information about it, including its name, population, region, and more. Built with HTML, JavaScript, and Tailwind CSS, the app fetches data from an API to provide up-to-date information. It’s designed to be simple to use and visually appealing, making it easy to explore and learn about countries around the globe."
                    project_tools={["Html", "Javascript", "Tailwindcss", "Api"]}
                    project_link_demo="https://jcrunatay.github.io/search-country/"
                    project_link_code="https://github.com/jcrunatay/search-country"
                />
                <Project
                    project_title="Front-end Quiz App"
                    project_src_desktop="./images/project-images/frontend_quiz_app_desktop.png"
                    project_src_mobile="./images/project-images/frontend_quiz_app_mobile.png"
                    project_description="Front-end Quiz App is an app to test front-end developer's basic knowledge in web development. Created with React for client side, and Php - MySql in server side. When application is run, You would need to login first or sign up if you haven't registered yet. Scores will be track and shown at the end of the quiz. Goodluck :)"
                    project_tools={["React", "Php", "MySql", "Tailwindcss"]}
                    project_link_demo="https://juyan-runatay.infinityfreeapp.com/frontend_quiz_app/"
                    project_link_code="https://github.com/jcrunatay/frontend_quiz_app"
                />
            </div>
        </section>
    );
}
