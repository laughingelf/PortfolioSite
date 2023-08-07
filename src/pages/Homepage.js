import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import { HashLink } from 'react-router-hash-link';



function Homepage() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const projects = [
        {
            title: 'LevelUp-MMA',
            description: "I am collaborating with the owner of a kid-focused karate school to bring his vision to life on the website. This preview version reflects his personality and goals, although it currently lacks live data. I will be providing web hosting services to ensure a seamless experience. Stay tuned for the live site link once it's finalized.",
            deployedUrl: 'https://master--bright-sundae-fd8c17.netlify.app/',
            repo: 'https://github.com/laughingelf/LevelUpMMA',
            picSrc: './img/levelup-logo.webp'
        },
        {
            title: 'MoviesFTP',
            description: "Introducing a movie rating app that puts you in control! With this full stack application powered by the MERN tech stack (MongoDB, Express, React, Node.js), you'll have the freedom to rate and review movies to your heart's content. The app offers complete CRUD operations, allowing you to create, read, update, and delete movie ratings effortlessly. To keep you up to date, it even leverages an external movie API, ensuring you have access to the latest releases. Think of it as your own personal IMDB-style platform, where you can share your honest opinions and recommendations with fellow movie enthusiasts. Get ready to dive into the world of movies and let your ratings do the talking!",
            deployedUrl: 'https://master--reliable-snickerdoodle-8abd38.netlify.app/auth/login',
            repo: 'https://github.com/laughingelf/MoviesFTP-Client',
            picSrc: './img/moviesftp.png'
        },
        {
            title: 'FactNator',
            description: "Introducing my first React Native application, 'FactNator.' This app allows you to select a number, date, or year, and in response, FactNator will provide you with a related fact. Additionally, you have the option to receive a random fact from its extensive database. I leveraged React Native to build this application and incorporated an existing API from RapidAPI to enhance its functionality and test my knowledge. With FactNator, exploring interesting facts becomes an engaging and informative experience. ***There is not a deployed URL, both buttons will link to Github Repo***",
            deployedUrl: 'https://github.com/laughingelf/Factnator',
            repo: 'https://github.com/laughingelf/Factnator',
            picSrc: './img/factNator.png'
        },
        {
            title: 'Tattoo Cathedral',
            description: 'I am currently in the process of building this website for a tattoo shop owner. This website is being developed using React for the frontend. I am working closely with the owner to ensure the site meets their vision and requirements. Once completed, this website will serve as the main online destination for the tattoo shop, attracting customers and showcasing their unique artistry. Stay tuned for the exciting launch of this captivating online platform.',
            deployedUrl: 'https://master--lucent-choux-709e50.netlify.app/',
            repo: 'https://github.com/laughingelf/tattoo-cathedral',
            picSrc: './img/tt-cathedral.png'
        },
        {
            title: "Builder's Paradise",
            description: "Immerse yourself in a captivating blog web application crafted with Express and powered by the Handlebars views engine. This platform serves as a haven for storing valuable information and showcasing my personal projects, reminiscent of the beloved forums that flourished in the early 2000s. Explore a nostalgic online community where ideas are shared, discussions thrive, and memories are made, all within the realm of this dynamic and user-friendly web application.",
            deployedUrl: 'https://builders-paradise.fly.dev/',
            repo: 'https://github.com/laughingelf/buildersParadise',
            picSrc: './img/buildersParadise.png'
        },
        {
            title: 'Boxman',
            description: 'Experience the thrill of a canvas-based game built for my full-stack development bootcamp project. Using JavaScript and DOM manipulation, this game mirrors the popular Google dinosaur game that keeps us entertained when the internet connection drops. Take control of a character as you navigate through challenging obstacles and showcase your skills in this addictive web-based adventure.',
            deployedUrl: 'https://laughingelf.github.io/Boxman/',
            repo: 'https://github.com/laughingelf/Boxman',
            picSrc: './img/boxman.png'
        }
    ]

    return (



        <div className="min-h-screen flex flex-col">

            <Navbar />



            <div className="min-h-screen flex flex-col items-center my-8">
                <div className="flex flex-col items-center" id="projects">
                    <h1 className="text-6xl underline font-bold mb-6 mt-4">Projects</h1>

                    {projects.map((project, index) => (
                        <div className="m-2 p-2" key={index}>
                            <ProjectCard project={project} />
                        </div>
                    ))}



                </div>
                <div className="flex flex-col items-center my-8" id="technologies">
                    <h1 className="text-6xl underline font-bold mb-6">Technologies</h1>
                    <div className="flex flex-wrap justify-center">
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/js-logo.svg" alt="javascript-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/python-logo.svg" alt="python-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/react-logo.svg" alt="react-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/nodejs-logo.svg" alt="node.js-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/django-logo.svg" alt="django-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/mongodb-logo.svg" alt="mongoDB-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/npm-logo.svg" alt="npm-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/github-logo.svg" alt="github-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/bootstrap-logo.svg" alt="bootstrap-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/tailwindcss-logo.svg" alt="tailwindcss-logo" />
                        <img className="w-24 h-24 mx-4 my-4" src="./img/svg/bmc.png" alt="bmc-controlm-logo" />
                    </div>

                </div>

                <div id="about-me" className="text-justify mx-3 my-8">
                    <h1 className="text-6xl underline font-bold mb-6 text-center">About Me</h1>
                    <div className="flex flex-col sm:flex-row items-center">
                        <img className="h-80 w-auto rounded-lg mb-6 shadow-2xl border border-1 border-gray-800 mx-auto sm:mr-16" src="./img/port-pic.jpg" alt="justin-photo" />
                        <div className="max-w-8xl mx-auto border border-1 border-black p-4 rounded-lg bg-gray-400 bg-opacity-20">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Hello there! My name is Justin, and I've taken a unique path in the world of technology. While I may not have followed the traditional routes, my <span className="underline italic">(mostly)</span> self-taught journey has allowed me to cultivate a deep passion for continuous learning and pushing the boundaries of what's possible.<br /><br />

                                I've always had a rebellious spirit and a penchant for defying norms. It is this very spirit that has driven me to explore uncharted territories in the realm of technology. I thrive on challenges and find immense satisfaction in pushing myself and the technologies I work with to new heights.<br /><br />

                                My expertise lies in the art of building. Whether it's delving into the exciting realm of artificial intelligence, automating tasks to enhance efficiency, or crafting seamless front-end experiences, I feel right at home. My passion for building extends beyond the digital realm too.<br /><br />

                                Outside of the digital world, I embrace the role of an adventurer. I have an insatiable appetite for unconventional hobbies. When I'm not pushing the limits of technology, you'll find me indulging my passion for metal fabrication, woodwork, building cars, and even tapping into my primal instincts with a touch of caveman spirit.<br /><br />

                                While I may not single-handedly revolutionize the world, I take immense joy in leaving my mark. Through my passion for technology, metal fabrication, woodwork, and automotive craftsmanship, I relish the thrill of pushing boundaries and defying conventions. I invite you to join me on this exhilarating journey as we create, innovate, and leave our unique imprint on the world.<br /><br />

                                Thank you for considering joining me on this exciting adventure!
                            </p>
                        </div>
                    </div>

                </div>


                <div id="resume" className="my-4">
                    <div className="flex flex-row">
                        <a className="mx-2" href='https://github.com/laughingelf/' target="_blank">
                            <button className="steampunk-button flex items-center space-x-2">
                                <img className="w-5 h-5" src="./img/svg/github-cat.svg" />
                                <span className="button-text text-blue-500 hover:underline text-sm sm:text-base">Github</span>
                            </button>
                        </a>
                        <a className="mx-2" href='https://www.linkedin.com/in/justin-gery/' target="_blank">
                            <button className="steampunk-button flex items-center space-x-2">
                                <img className="w-5 h-5" src="./img/svg/linkedin.svg" />
                                <span className="button-text text-blue-500 hover:underline text-sm sm:text-base">LinkedIn</span>
                            </button>
                        </a>
                        <a href="./files/JustinGery.pdf" download>
                            <button className="steampunk-button flex items-center space-x-2">
                                <img className="w-5 h-5" src="./img/svg/resume.svg" />
                                <span className="button-text text-blue-500 hover:underline text-sm sm:text-base">Resume</span>
                            </button>
                        </a>


                    </div>
                    <HashLink
                        smooth
                        id="to-top"
                        to="/#"
                        className="flex justify-center mt-6 text-gray-400 underline"
                    >
                        Back To Top
                    </HashLink>
                </div>
            </div>
            <Footer />
        </div >


    )
}

export default Homepage