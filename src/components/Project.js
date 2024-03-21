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
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            fill="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                <title>ic_fluent_live_24_filled</title>{" "}
                                <desc>Created with Sketch.</desc>{" "}
                                <g
                                    id="🔍-Product-Icons"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="ic_fluent_live_24_filled"
                                        fill="currentColor"
                                        fill-rule="nonzero"
                                    >
                                        <path
                                            d="M6.34277267,4.93867691 C6.73329697,5.3292012 6.73329697,5.96236618 6.34277267,6.35289047 C3.21757171,9.47809143 3.21757171,14.5450433 6.34277267,17.6702443 C6.73329697,18.0607686 6.73329697,18.6939336 6.34277267,19.0844579 C5.95224838,19.4749821 5.3190834,19.4749821 4.92855911,19.0844579 C1.02230957,15.1782083 1.02230957,8.84492646 4.92855911,4.93867691 C5.3190834,4.54815262 5.95224838,4.54815262 6.34277267,4.93867691 Z M19.0743401,4.93867691 C22.9805896,8.84492646 22.9805896,15.1782083 19.0743401,19.0844579 C18.6838158,19.4749821 18.0506508,19.4749821 17.6601265,19.0844579 C17.2696022,18.6939336 17.2696022,18.0607686 17.6601265,17.6702443 C20.7853275,14.5450433 20.7853275,9.47809143 17.6601265,6.35289047 C17.2696022,5.96236618 17.2696022,5.3292012 17.6601265,4.93867691 C18.0506508,4.54815262 18.6838158,4.54815262 19.0743401,4.93867691 Z M9.3094225,7.81205295 C9.69994679,8.20257725 9.69994679,8.83574222 9.3094225,9.22626652 C7.77845993,10.7572291 7.77845993,13.2394099 9.3094225,14.7703724 C9.69994679,15.1608967 9.69994679,15.7940617 9.3094225,16.184586 C8.91889821,16.5751103 8.28573323,16.5751103 7.89520894,16.184586 C5.58319778,13.8725748 5.58319778,10.1240641 7.89520894,7.81205295 C8.28573323,7.42152866 8.91889821,7.42152866 9.3094225,7.81205295 Z M16.267742,7.81205295 C18.5797531,10.1240641 18.5797531,13.8725748 16.267742,16.184586 C15.8772177,16.5751103 15.2440527,16.5751103 14.8535284,16.184586 C14.4630041,15.7940617 14.4630041,15.1608967 14.8535284,14.7703724 C16.384491,13.2394099 16.384491,10.7572291 14.8535284,9.22626652 C14.4630041,8.83574222 14.4630041,8.20257725 14.8535284,7.81205295 C15.2440527,7.42152866 15.8772177,7.42152866 16.267742,7.81205295 Z M12.0814755,10.5814755 C12.9099026,10.5814755 13.5814755,11.2530483 13.5814755,12.0814755 C13.5814755,12.9099026 12.9099026,13.5814755 12.0814755,13.5814755 C11.2530483,13.5814755 10.5814755,12.9099026 10.5814755,12.0814755 C10.5814755,11.2530483 11.2530483,10.5814755 12.0814755,10.5814755 Z"
                                            id="🎨-Color"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        View Live
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="project-link"
                        href={`${props.project_link_code}`}
                    >
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />{" "}
                                <path
                                    d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />{" "}
                                <path
                                    d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />{" "}
                                <path
                                    d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />{" "}
                            </g>
                        </svg>
                        View Code
                    </a>
                </div>
            </div>
        </>
    );
}
