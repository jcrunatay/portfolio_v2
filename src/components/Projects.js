import React, { useRef, useState } from 'react';
import SectionAnimation from './SectionAnimation';
import Project from "./Project";

export default function Projects(){
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [hasTitleAnimated, setHasTitleAnimated] = useState(false);
    const headingRef = useRef(null);
    return(
        <section id="projects" className="dark-section">
            <SectionAnimation 
                hasAnimated={hasTitleAnimated} 
                setIsVisible={setIsTitleVisible} 
                setHasAnimated={setHasTitleAnimated} 
                elementRef={headingRef}
                threshold={0.8}
            />
            <h2 ref={headingRef} className={`title section-title ${isTitleVisible ? "section-title-animate" : ""}`}><span className="dark-title-line title-line"></span>Projects<span className="dark-title-line title-line"></span></h2>
            <div className="projects-container">
                <Project 
                    project_title='Web Content Management System'
                    project_src_desktop='./portfolio_v2/images/project-images/cms_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/cms_mobile.png'
                    project_description='Web Content Management System is a software system that provides website authoring, collaboration, and administration tools designed to allow users with little knowledge of web programming languages or markup languages to create and manage website content with relative ease'
                    project_tools={['Bootstrap','MySql','Php','Html','Css','Javascript']}
                    project_link_demo='http://juyan-runatay.infinityfreeapp.com/M5P/'
                    project_link_code='https://github.com/jcrunatay/Group-Project'
                />
                <Project 
                    project_title='DevFinder'
                    project_src_desktop='./portfolio_v2/images/project-images/devfinder_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/devfinder_mobile.png'
                    project_description='DevFinder is an app where you can search github users by their username and information such as name, number of repos, location and others will be displayed.'
                    project_tools={['Html','Tailwindcss','Javascript','Api']}
                    project_link_demo='https://jcrunatay.github.io/devfinder/'
                    project_link_code='https://github.com/jcrunatay/devfinder'
                />
                <Project 
                    project_title='Mini-Chat'
                    project_src_desktop='./portfolio_v2/images/project-images/mini_chat_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/mini_chat_mobile.png'
                    project_description="An application where users can register and join the public group chat. New users will be able to see even the old chat in the group.It's a good app in discussing a speficic topic."
                    project_tools={['Bootstrap','MySql','Php','Html','Css','Javascript']}
                    project_link_demo='http://juyan-runatay.infinityfreeapp.com/M4/Mini-Chat/lab2.php'
                    project_link_code='https://github.com/jcrunatay/Mini-Chat'
                />
                <Project 
                    project_title='TheWatchMovies'
                    project_src_desktop='./portfolio_v2/images/project-images/movie_app_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/movie_app_mobile.png'
                    project_description="TheWatchMovies is an app where users can watch  movie(trailer) and users will be able to see the full information of the movie."
                    project_tools={['React','Tailwindcss','Api']}
                    project_link_demo='https://jcrunatay.github.io/movie_app/'
                    project_link_code='https://github.com/jcrunatay/movie_app'
                />
                <Project 
                    project_title='Portfolio V1'
                    project_src_desktop='./portfolio_v2/images/project-images/portfolio_v1_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/portfolio_v1_mobile.png'
                    project_description="Portfolio V1 is my very first portfolio that I created before my internship.It shows  how  my interest in programming started. Created this to practice more in Bootstrap and responsive web design."
                    project_tools={['Html','Css','Javascript',"Bootstrap"]}
                    project_link_demo='https://jcrunatay.github.io/Portfolio/'
                    project_link_code='https://github.com/jcrunatay/movie_app'
                />
                <Project 
                    project_title='Public Feedback'
                    project_src_desktop='./portfolio_v2/images/project-images/public_feedback_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/public_feedback_mobile.png'
                    project_description="With this app, users can insert a feedback by using hastag to refer to the company e.g(#Tim's) then it will show to the public feedback and other users will be able to see it."
                    project_tools={['Html','Css','Javascript',"Bootstrap",'Api']}
                    project_link_demo='https://jcrunatay.github.io/Public_feedback/'
                    project_link_code='https://github.com/jcrunatay/Public_feedback'
                />
                <Project 
                    project_title='Punchbag'
                    project_src_desktop='./portfolio_v2/images/project-images/punchbag_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/punchbag_mobile.png'
                    project_description="Punchbag is a game app where user can select or add their own character(avatar) and play the game.When a character is hit, the HP goes down by 5points and the opponent's hp goes up by 3points.If character does a 3hit combo, it won't be able to hit for 5seconds."
                    project_tools={['Html','Php','Javascript',"Bootstrap",'MySql','Css']}
                    project_link_demo='http://juyan-runatay.infinityfreeapp.com/M4/Punch-Bag/'
                    project_link_code='https://github.com/jcrunatay/punch_bag'
                />
                <Project 
                    project_title='Rock-Paper-Scissors'
                    project_src_desktop='./portfolio_v2/images/project-images/rps_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/rps_mobile.png'
                    project_description='The Rock-Paper-Scissors game is a simple hand game usually played between two people where each player simultaneously forms one of three shapes with their hand. The possible shapes are "rock" (a closed fist), "paper" (an open hand), and "scissors" (a fist with the index and middle fingers extended, forming a V).'
                    project_tools={['Html','Javascript',"Bootstrap",'Css']}
                    project_link_demo='https://jcrunatay.github.io/Rock-_Paper_Scissors/'
                    project_link_code='https://github.com/jcrunatay/Rock-_Paper_Scissors'
                />
                <Project 
                    project_title='Where in the world ?'
                    project_src_desktop='./portfolio_v2/images/project-images/search_country_desktop.png'
                    project_src_mobile='./portfolio_v2/images/project-images/search_country_mobile.png'
                    project_description="Where in the world is an app where you can search for a country and information such as name of the country, population, region and other information will be displayed."
                    project_tools={['Html','Javascript','Tailwindcss','Api']}
                    project_link_demo='https://jcrunatay.github.io/search-country/'
                    project_link_code='https://github.com/jcrunatay/search-country'
                />


            </div>
        </section>
    )
}