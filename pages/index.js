import Layout from '../components/Layout';
import Landing from'../components/Landing';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/work/Work';
import Education from '../components/education/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import TwoColumn from '../components/TwoColumn';

import { getSkillData, getProjectData, getWorkData, getEducationData  } from '../lib/utils';

import Fade from 'react-reveal/Fade';
import ThemeContext from '../context/ThemeContext';
import { useState, useEffect } from 'react';


export default function Home({ workData, educationData, skillData, projectData }) {
  const [dark, setDark] = useState(true);
  
  // Functions to support loading theme settings from localStorage
  const toggleDark = () => {
    localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
  }
  // Object to passed to the ThemeContext.Provider
  const value = { dark, toggleDark };

  // Function to check whether the browser supports dark mode
  const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true;

  // On component mount, load theme settings from localStorage
  useEffect(() => {
    const tmpDark = JSON.parse(localStorage.getItem("dark"));
    console.log("localstorage dark: ", tmpDark);

    if (tmpDark === false) {
      setDark(tmpDark);
    } else if (supportsDarkMode()) {
      setDark(true);
    }

  },[])

  return (
    <ThemeContext.Provider value={value}>
    <Layout>
      <Landing/>
      <Fade duration={1000}>
        <About/>
        <Skills skillData={ skillData }/>
        <TwoColumn>
          <Work workData={ workData }/>
          <Education educationData={ educationData }/>
        </TwoColumn>
        <Projects projectData={ projectData }/>
        <Contact/>
        <Footer/>
      </Fade>
    </Layout>
    </ThemeContext.Provider>
    
  )
}

export async function getStaticProps() {
  const skillData = getSkillData();
  const projectData = getProjectData();
  const workData = getWorkData();
  const educationData = getEducationData();

  return {
      props:  { 
        skillData,
        projectData,
        workData,
        educationData
      }
  };
}
