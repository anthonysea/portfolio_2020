import Layout from '../components/Layout'
import Landing from'../components/Landing'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import { getSkillData, getProjectData  } from '../lib/utils';

import Fade from 'react-reveal/Fade';
import ThemeContext from '../context/ThemeContext'
import { useState } from 'react'


export default function Home({ skillData, projectData }) {
  const [dark, setDark] = useState(true)
  const value = { dark, setDark }

  return (
    <ThemeContext.Provider value={value}>
    <Layout>
      <Landing/>
      <Fade duration={1000}>
        <About/>
        <Skills skillData={ skillData }/>
        <Projects projectData={ projectData }/>
        <Contact/>
        <Footer/>
      </Fade>
    </Layout>
    </ThemeContext.Provider>
    
  )
}

export async function getStaticProps() {
  const skillData = getSkillData()
  const projectData = getProjectData()

  return {
      props:  { 
        skillData,
        projectData
      }
  }
}
