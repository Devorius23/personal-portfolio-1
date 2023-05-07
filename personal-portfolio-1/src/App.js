import './App.css';


const App = () => {

  return (
    <>
      <div className="BG">
        <header>
        <ol className="list">
          <li><a href="#About Me">About Me</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact Me">Contact Me</a></li>
          <li><a href="#Resume">Resume</a></li>
        </ol>
        </header>

        <div className="content">
          <section id="About Me"></section>
          <section id="Projects"></section>
          <section id="Contact Me"></section>
        </div>

        <ul className="links">
          <li><a href="https://www.linkedin.com/in/devorius-harris-softwareengineer/"> Linkedin</a></li>
          <li><a href="https://github.com/Devorius23"> Github</a></li>

        </ul>


        <img className="pic" src="./Port.jpg" alt="" />


        <div>
          <h2 className="header">About Me</h2>
          <p className="about"> Hi, my name Devorius and I am a alumni of the General Assembly immerssive software engineering course. I have experience in management, and working in a team environment both in person, and remote. I enjoy learning new technologies, and continue to push myself and my skills to new heights. I specialize in full-stack MERN/PERN (MongoDB, PostgreSQL, Express.js, React.js, Node.js) and RESTful APIs.  On my free time I enjoy working out, traveling, atv riding, playing video games, sports both watching and playing. I'm also a big family guy!</p>

        </div>

        <div className="Contact">
          <h2 className="info-1">Contact Me</h2>
          <div className="info">
            <form className="form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />

              <label htmlFor="message">Message:</label>
              <textarea id="message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

        </div>

        <div >
          <h2 className="header-2">Projects</h2>
          <div className="projects">
            <ol type="i" >
              <li><a href='https://radiant-hollows-59694.herokuapp.com/api/tasks/'> Big Body Lifts</a></li>

            </ol>
          </div>
          <footer className="bottom">
            <p>Copyright &copy;. All Rights Reserved.</p>
          </footer>
        </div>

      </div>
    </>
      
  );
}

export default App;