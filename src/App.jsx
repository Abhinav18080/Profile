import { useState, useEffect, useRef } from 'react'
import './App.css'
import arrow from './downArrow.jpg';
import iowa from './iowastate2.jpg';
import github from './gitHub.jpg';
import linkedIn from './linkedIn.jpg';

function App() {
  const [fade, setFade] = useState(false);
  const [color, setColor] = useState(false);
  const projectPart = useRef(null);
  const aboutMePart = useRef(null);
  const contactPart = useRef(null);
  const returnTopPart = useRef(null);

  function scrollToTop(){
    if(returnTopPart.current){
      returnTopPart.current.scrollIntoView({
        behavior: 'smooth',
        block:'start',
      })
    }
  }

  function scrollToProject(){
    if(projectPart.current){
      projectPart.current.scrollIntoView({
        behavior: 'smooth',
        block:'start',
      })
    }
  }

  function scrollToAboutMe(){
    if(aboutMePart.current){
      aboutMePart.current.scrollIntoView({
        behavior: 'smooth',
        block:'start',
      });
    }
  };

  function scrollToContact(){
    if(contactPart.current){
      contactPart.current.scrollIntoView({
        behavior: 'smooth',
        block:'start',
      })
    }
  }

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY >= 1){
        console.log("Change color to #00a2fa");
        setColor(true);
      }
      else{
        console.log("change color to black");
        setColor(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 1) {
        setFade(true);
      } 
      else{
        setFade(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <div className={`topbar ${color ? 'color': ''}`}>
        <div className="head">
          <button className='headName' onClick={scrollToTop}>Abhinav Manosh Pillai</button>
        </div>

        <div className="menu">
          <button className="project" onClick={scrollToProject}>Projects</button>
          <button className="aboutMe" onClick={scrollToAboutMe}>About Me</button>
          <button className="contact" onClick={scrollToContact}>Contact</button>
        </div>
      </div>

      <div className='body' ref={returnTopPart}>
        <p className='hi'>Hello World, I am Abhi</p>
        <img src={arrow} alt="Arrow" className={`arrow ${fade ? 'fade': ''}`} />
      </div>
      <div className='projectContainer' ref={projectPart}>
        <div className='projectSection'>
          <p className='project1'>In the Works</p>
        </div>
      </div>
      <div className='aboutMeSection' ref={aboutMePart}>
        <p className='aboutMe'><br /><br />About Me</p>
        <div className='detailContainer'>
          <p className='details'>Hi, my name is 
          Abhinav Manosh Pillai. I am currently a second-year student at Iowa State University 
          with a growing passion for coding and software development. 
          Over the past year, I have immersed myself in learning various programming languages, including Java, Python, JavaScript, HTML, and CSS. 
          My dedication to mastering these technologies is matched by my enthusiasm for solving complex problems and creating innovative solutions. 
          Outside of programming, I enjoy playing tennis, which helps me stay active and sharp both mentally and physically. 
          As I continue my journey in the tech world, I am excited to take on new challenges and contribute to impactful projects.
          </p>
        </div>
      </div>

      <div className='education'>
        <h1 className='education1'>Education:</h1>
        <div className='iowaStateContainer'>
          <img src={iowa} alt='Iowa' className='IowaState'></img>
          <div className='textContainer'>
            <p className='collegeName'>College: Iowa State University</p>
            <p className='years'>Year: Sophomore</p>
            <p className='major'>Major: Computer Science</p>
            <p className='courses'>Courses:</p>
            <div className='courseList'>
              <li>COM S 227 (Object Oriented Programming)</li>
              <li>COM S 228 (Introduction to Data Structures)</li>
              <li>COM S 230 (Discrete Computational Structures)</li>
            </div>
            <p className='extra'>Clubs and Organizations: </p>
            <div className='clubsOrg'>
              <li className='tennis'>Iowa State Tennis Club</li>
              <li className='codingClub'>Competitive Coding Club</li>
            </div>
          </div>
        </div>
      </div>
      <div className='contacts' ref={contactPart}>
        <h1 className='Contacts'>Contacts</h1>
        <p className='info'>
          Email: &nbsp;<a className='profileEmail' href='mailto:pillai.abhinavmanosh@gmail.com' target='_blank' rel='Gmail'>pillai.abhinavmanosh@gmail.com</a>&nbsp;| 
          Phone: 563-676-8368 | 
          &nbsp;<a className='profileLinkedIn' href="https://www.linkedin.com/in/apillai08"  target='_blank' rel='LinkedInProfile'><img  src={linkedIn} alt='linkedIn' className='linkedInimg'/></a>&nbsp;|
          &nbsp;<a className='profileGitHub' href='https://github.com/Abhinav18080' target='_blank' rel='GitHubProfile'><img src={github} alt="github" className='githubimg'/></a>
        </p>
          
      </div>
    </>
  )
}
export default App