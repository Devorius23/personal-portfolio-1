import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Port from './images/Port.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';











const App = () => {

  return (
    <>


      <nav className="row">
        <ul>
          <li><a href="http://localhost:3001/" ><FontAwesomeIcon icon={faCode} /></a></li>
          <li><a href="#About Me">About Me</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact Me">Contact Me</a></li>
          <li><a href="#Resume">Resume</a></li>
          <li><a href="https://www.linkedin.com/in/devorius-harris-softwareengineer/"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="https://github.com/Devorius23"> <FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
      </nav>




      <div className="content">
        <section id="About Me"></section>
        <section id="Projects"></section>
        <section id="Contact Me"></section>
      </div>


      <div className="about">
        <h2 className="header">About Me</h2>
        <img src={Port} className="port" alt=""></img>
        <p> Hi, my name is Devorius and I am a alumni of the General Assembly immerssive software engineering course. I have experience in management, and working in a team environment both in person, and remote. I enjoy learning new technologies, and continue to push myself and my skills to new heights. I specialize in full-stack MERN/PERN (MongoDB, PostgreSQL, Express.js, React.js, Node.js) and RESTful APIs.  On my free time I enjoy working out, traveling, atv riding, playing video games, sports both watching and playing. I'm also a big family guy!</p>

      </div>



      <div >
        <h2 className="header-2">Projects</h2>
        <div className="projects">
          <ul className="sym">

            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="move" alt="" />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" className="move" alt="" />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="move" alt="" />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" className="move" alt="" />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" className="move" alt="" />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" className="move" alt="" />
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" className="move" alt="" />
            </li>
          </ul>
          <ol type="i" >
            <li><a href='https://app.netlify.com/sites/charming-donut-1fc45a/deploys'> About Me</a></li>
          </ol>

          <div className="email">
            <h2 className="info-1">Contact Me</h2>
            <i className="bi bi-envelope-at react-icon"> DevoriusHarris23@gmail.com</i> {/* Email icon */}

          </div>

        </div>
        <footer className="bottom">
          <p>Copyright &copy;. All Rights Reserved.</p>
        </footer>
      </div>
    </>

  );
}

export default App;
