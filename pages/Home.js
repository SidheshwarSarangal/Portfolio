import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResumeData } from "../redux/resumeActions";
import { GrProjects } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { BsMusicPlayer } from "react-icons/bs";
import { FaPaintBrush, FaPen } from "react-icons/fa";
import '../css/PersonalEducationPage.css'; // Create this CSS file for styling
import "../css/style.css";
import "../css/firstPage.css";
import "../css/AboutPage.css"; // Assuming you have a separate CSS file for styles
import "../css/SkillsPage.css";
import "../css/Projects.css";
import '../css/CertificatesExperiencePage.css';
import '../css//PassionPage.css';



const descriptions = {
    "skill-c++": "C++ is a powerful general-purpose programming language. It is widely used in competitive programming and system-level applications.",
    "skill-javascript": "JavaScript is a versatile language used for creating dynamic and interactive web pages.",
    "skill-git-and-github": "Git is a distributed version control system, and GitHub is a platform for hosting and collaborating on code.",
    "skill-data-structures-and-algorithm": "Mastery in Data Structures and Algorithms helps in solving complex computational problems efficiently.",
    "skill-mern-stack": "MERN Stack refers to MongoDB, Express.js, React.js, and Node.js, used for full-stack development.",
    "skill-express.js": "Express.js is a minimal and flexible Node.js web application framework for creating robust APIs.",
    "skill-react.js": "React.js is a JavaScript library for building user interfaces, especially single-page applications.",
    "skill-friendly-and-positive-attitude": "A friendly and positive attitude helps in fostering teamwork and productivity.",
    "education-class-10th": "Achieved a commendable 92.7% in Class X CBSE Board.",
    "education-class-12th": "Achieved an impressive 93.5% in Class XII CBSE Board.",
    "education-b.tech": "Graduated with a B.Tech degree from the prestigious Indian Institute of Technology.",
    "project-backend-of-a-social-media-website": "A scalable backend for a social media website, focusing on user authentication and database management.",
    "project-frontend-of-a-social-media-website": "A responsive frontend for a social media website using React.js and Material-UI for an enhanced user experience.",
    "project-weather-application": "A weather application providing real-time weather updates using APIs like OpenWeather.",
    "project-resume": "A dynamic and visually appealing resume built as a web application.",
    "project-e-gram-panchayat": "A project aimed at digitalizing governance in rural areas.",
    "project-super-mall-web-application": "An e-commerce application simulating a digital shopping mall with advanced filters.",
    "certificate-certificate-of-excellence-in-data-structures-and-algorithm": "Awarded for excellence in mastering Data Structures and Algorithms by Coding Ninjas. You can check on LINKEDIN",
    "certificate-certificate-of-internship-in-full-stack-web-development": "Completed an internship in Full Stack Web Development with hands-on project experience.",
    "experience-one-month-internship-at-unified-mentor-platform": "Gained practical exposure during a one-month internship at Unified Mentor Platform.",
    "passion-digital-art": "Digital art involves using digital technology to create visual works of art.",
    "passion-basic-music-production": "Basic music production involves creating, mixing, and editing music using software tools.",
    "passion-writing-poetry": "Writing poetry is a creative form of expression, blending emotions and rhythm in words.",
};

const Description = ({ description, isVisible }) => {
    return (
        <div className={`description ${isVisible ? "visible" : "hidden"}`}>
            {description}
        </div>
    );
};



const Home = () => {
    const dispatch = useDispatch();
    const resumeData = useSelector((state) => state);
    const [activeDescription, setActiveDescription] = useState(null);

    const imageUrls = [
        'https://c.wallhere.com/photos/56/bb/Razer_keyboards_computer_PC_gaming-107705.jpg!d',
        'https://c.wallhere.com/photos/11/ba/programming_language_technology_tilt_shift_computer-1937215.jpg!d',
        'https://blog.herzing.ca/hubfs/ethical%20hacker.jpg',
        'https://cdn.analyticsvidhya.com/wp-content/uploads/2024/04/Top-8-Coding-Platforms-for-Data-Science-Beginner-01-scaled.jpg',
        'https://blog-media.byjusfutureschool.com/bfs-blog/2022/08/03035002/Article-Image-945%C3%97498.jpg',
        'https://xclcamps.com/wp-content/uploads/coding-difference-1.jpg',

    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const [backgroundIndex, setBackgroundIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 10000); // Change background every 10 seconds
        return () => clearInterval(interval);
    }, [imageUrls.length]);


    const skillDuration = 8 * 1000; // 8 seconds in milliseconds

    const skills = [
        "Software Engineer",
        "Software Development",
        "MERN Stack",
        "Problem Solving",
        "Algorithms",
        "C++",
        "Javascript",
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, skillDuration);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [skills.length]);

    useEffect(() => {
        // Load resume data into Redux
        const data = {
            personalInfo: {
                name: "Sidheshwar Sarangal",
                number: "9015220662",
                email: "sidheshwar.sarangal@gmail.com",
                location: "Delhi",
                github: "https://github.com/your-profile",
                Linkedin: "www.linkedin.com/in/sidheshwar-sarangal-0b31482b8",
                photo: "https://via.placeholder.com/150",
            },
            skills: [
                "C++", "JavaScript", "Git and GitHub", "Data Structures and Algorithms",
                "MERN Stack", "Express.js", "React.js", "Friendly and Positive Attitude"
            ],
            education: [
                { level: "Class 10th", grade: "92.7% CBSC" },
                { level: "Class 12th", grade: "93.5% CBSC" },
                { level: "B.Tech", institute: "Indian Institute of Technology" }
            ],
            projects: [
                { name: "Backend of a SOCIAL MEDIA Website", description: "Backend logic using Express.js" },
                { name: "Frontend of a SOCIAL MEDIA Website", description: "Built with React.js" },
                { name: "Weather Application", description: "Real-time weather updates using APIs" },
                { name: "Resume", description: "Dynamic resume web app" },
                { name: "E Gram Panchayat", description: "Digitalizing rural governance" },
                { name: "Super Mall Web Application", description: "E-commerce platform simulation" }
            ],
            certificates: [
                "Certificate of Excellence in Data Structures and Algorithm",
                "Certificate of Internship in Full Stack Web Development"
            ],
            experience: ["One Month Internship at Unified Mentor Platform"],
            passion: ["Digital Art", "Basic Music Production", "Writing Poetry"]
        };

        dispatch(setResumeData(data));
    }, [dispatch]);

    const toggleDescription = (id) => {
        setActiveDescription((prev) => (prev === id ? null : id));
    };


    const [popupDescription, setPopupDescription] = useState(null);

    const handleProjectClick = (id) => {
        if (popupDescription === id) {
            setPopupDescription(null); // Close popup if clicking on the same project
        } else {
            setPopupDescription(id); // Show the description popup for the clicked project
        }
    };

    const [popupDescription1, setPopupDescription1] = useState(null);

    const handleItemClick = (id) => {
        if (popupDescription1 === id) {
            setPopupDescription1(null); // Close popup if the same item is clicked
        } else {
            setPopupDescription1(id); // Show the description popup for the clicked item
        }
    };

    const [activeDPassion, setActivePassion] = useState(null);

    const togglePassion = (id) => {
        if (activeDescription === id) {
            setActivePassion(null); // Close description if clicked again
        } else {
            setActivePassion(id); // Open description
        }
    };

    const getIconForPassion = (passion) => {
        switch (passion) {
            case 'Digital Art':
                return <FaPaintBrush className="passion-icon digital-art" />;
            case 'Writing Poetry':
                return <FaPen className="passion-icon poetry" />;
            case 'Basic Music Production':
                return <BsMusicPlayer className="passion-icon music-production" />;
            default:
                return null;
        }
    };


    return (
        <div id="content-main">
            {/* Top Bar */}
            <div className="navbar">
                <div id="top-bar">
                    <div className="nav-item">About</div>
                    <div className="nav-item"><a href="#Skills">Skills</a></div>
                    <div className="nav-item"><a href="#Education">Education</a></div>
                    <div className="nav-item"><a href="#Projects">Projects</a></div>
                    <div className="nav-item"><a href="#Certificates">Certificates</a></div>
                    <div className="nav-item"><a href="#Experience">Experience</a></div>
                    <div className="nav-item"><a href="#passion">Passion</a></div>
                </div>
            </div>

            <section className="intro-section">
                <div className="intro-container">
                    <div className="name-container">
                        <h1 className="color-change-text">
                            <span>S</span>
                            <span>I</span>
                            <span>D</span>
                            <span>H</span>
                            <span>E</span>
                            <span>S</span>
                            <span>H</span>
                            <span>W</span>
                            <span>A</span>
                            <span>R</span>
                        </h1>
                        <h1 className="color-change-text">
                            <span>S</span>
                            <span>A</span>
                            <span>R</span>
                            <span>A</span>
                            <span>N</span>
                            <span>G</span>
                            <span>A</span>
                            <span>L</span>
                        </h1>
                        <div className="carousel-container">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`skill ${index === currentIndex ? "visible" : ""}`}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="image-container">
                        <img
                            src="http://www.pngmart.com/files/5/Robot-PNG-File.png"
                            alt="Profile Picture"
                            className="profile-image"
                        />
                    </div>
                </div>
                <a href="#page-container" className="down-button">
                    <span><FaChevronDown /> </span>
                </a>
            </section>

            <div id="page-container">
                <div className="top-section">
                    <div className="content">
                        <h1>About Me</h1>
                        <p>
                            Hello! I am a passionate developer who loves creating amazing
                            things. I focus on building impactful applications that make a
                            difference. I am constantly learning and growing my skills.
                        </p>
                    </div>
                </div>

                <div className="bottom-section">
                    <div className="content">
                        <h2>I Do Amazing Things</h2>
                        <div className="icon-container">
                            <div className="icon-item">
                                <GrProjects className="action-icon" />
                                <p>Projects</p>
                            </div>
                            <div className="icon-item">
                                <FaRegLightbulb className="action-icon" />
                                <p>Skills</p>
                            </div>
                            <div className="icon-item">
                                <IoMdRocket className="action-icon" />
                                <p>Passion</p>
                            </div>
                        </div>
                    </div>

                </div>
                <a href="#info-page-container" className="down-button-2">
                    <span><FaChevronDown /></span>
                </a>
            </div>

            <div className="info-page-container" id="info-page-container">
                <div className="info-page-container-inner">


                    <div className="personal-info-section">
                        <h1 className="Personal-heading"
                            style={{
                                fontSize: '4rem',
                                fontFamily: 'Trebuchet MS',
                                fontWeight: 'bold',
                                marginBottom: '50px',

                                color: '#333',
                                textAlign: 'left'
                            }}>Personal Information</h1>
                        <div className="info-container">
                            <div className="info-details">
                                <div><strong>Name:</strong> {resumeData.personalInfo?.name}</div>
                                <div><strong>Number:</strong> {resumeData.personalInfo?.number}</div>
                                <div><strong>Email:</strong> {resumeData.personalInfo?.email}</div>
                                <div><strong>Location:</strong> {resumeData.personalInfo?.location}</div>
                                <div><strong>GitHub:</strong> <a href={resumeData.personalInfo?.github} target="_blank" rel="noopener noreferrer">{resumeData.personalInfo?.github}</a></div>
                                <div><strong>LinkedIn:</strong> <a href={resumeData.personalInfo?.Linkedin} target="_blank" rel="noopener noreferrer">{resumeData.personalInfo?.Linkedin}</a></div>

                            </div>
                            <div className="info-image">
                                <img src={resumeData.personalInfo?.photo} alt="Your Photo" />
                            </div>
                        </div>
                    </div>

                    <div className="education-section">
                        <div className="education-inner">
                            <h1 className="Personal-heading"
                                style={{
                                    fontSize: '4rem',
                                    fontFamily: 'Trebuchet MS',
                                    fontWeight: 'bold',


                                    marginBottom: '50px',
                                    color: '#333',

                                }}>Education</h1>
                            <ul className="education-list">
                                {resumeData.education?.map((edu, index) => {
                                    const id = `education-${edu.level.toLowerCase().replace(/ /g, '-')}`;
                                    return (
                                        <li key={index} onClick={() => toggleDescription(id)}>
                                            {edu.level}: {edu.grade || edu.institute}
                                            <Description
                                                description={descriptions[id]}
                                                isVisible={activeDescription === id}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                    </div>

                </div>
                <a href="#skills-page" className="down-button-3">
                    <span><FaChevronDown /></span>
                </a>

            </div>



            <div
                className="skills-page" id="skills-page"
                style={{ backgroundImage: `url(${imageUrls[backgroundIndex]})` }}
            >
                <div className="skills-window">
                    <h1>SKILLS</h1>
                    <ul className="skills-list">
                        {resumeData.skills?.map((skill, index) => {
                            const id = `skill-${skill.toLowerCase().replace(/ /g, '-')}`;
                            return (
                                <li
                                    key={index}
                                    className="skill-tile"
                                    onClick={() => toggleDescription(id)}
                                >
                                    {activeDescription === id ? (
                                        <Description
                                            description={descriptions[id]}
                                            isVisible={activeDescription === id}
                                        />
                                    ) : (
                                        skill
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>


            <div className="projects-page">
                <h1
                    style={{
                        fontSize: '3rem',
                        fontFamily: 'Trebuchet MS',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        color: '#333',
                        textAlign: 'left'
                    }}
                >PROJECTS</h1>
                <div className="projects-container">
                    {resumeData.projects?.map((project, index) => {
                        const id = `project-${project.name.toLowerCase().replace(/ /g, '-')}`;
                        return (
                            <div
                                key={index}
                                onClick={() => handleProjectClick(id)}
                                className="project-tile"
                            >
                                {project.name}
                            </div>
                        );
                    })}
                </div>
                {popupDescription && (
                    <div className="description-popup">
                        <div className="popup-content">
                            <button
                                className="close-button"
                                onClick={() => setPopupDescription(null)}
                            >
                                &times;
                            </button>
                            <Description
                                description={descriptions[popupDescription]}
                                isVisible={true}
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="certificates-experience-page">
                <div className="certificates-section">
                    <h2

                        style={{
                            fontSize: '3rem',
                            fontFamily: 'Trebuchet MS',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            color: '#333',
                            textAlign: 'left'
                        }}>Certificates</h2>
                    <ul className="certificate-list">
                        {resumeData.certificates?.map((cert, index) => {
                            const id = `certificate-${cert.toLowerCase().replace(/ /g, '-')}`;
                            return (
                                <li
                                    key={index}
                                    onClick={() => handleItemClick(id)}
                                    className="certificate-item"
                                >
                                    {cert}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="experience-section">
                    <h2

                        style={{
                            fontSize: '3rem',
                            fontFamily: 'Trebuchet MS',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            color: '#333',
                            textAlign: 'left'
                        }}>Experience</h2>
                    <ul className="experience-list">
                        {resumeData.experience?.map((exp, index) => {
                            const id = `experience-${exp.toLowerCase().replace(/ /g, '-')}`;
                            return (
                                <li
                                    key={index}
                                    onClick={() => handleItemClick(id)}
                                    className="experience-item"
                                >
                                    {exp}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {popupDescription1 && (
                    <div className="description-popup">
                        <div className="popup-content">
                            <button
                                className="close-button"
                                onClick={() => setPopupDescription1(null)}
                            >
                                &times;
                            </button>
                            <Description
                                description={descriptions[popupDescription1]}
                                isVisible={true}
                            />
                        </div>
                    </div>
                )}
            </div>


            <div id="Passion" className="section">
                <h2>Passion</h2>
                <div className="passion-icons-container">
                    {resumeData.passion?.map((item, index) => {
                        const id = `passion-${item.toLowerCase().replace(/ /g, '-')}`;
                        return (
                            <div key={index} className="icon-wrapper" onClick={() => togglePassion(id)}>
                                {getIconForPassion(item)}
                                <p className="icon-label">{item}</p>
                                {activeDPassion === id && (
                                    <Description
                                        description={descriptions[id]}
                                        isVisible={activeDPassion === id}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>




        </div>
    );
};

export default Home;
