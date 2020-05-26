import Head from 'next/head'

import Layout from '../components/Layout'
import Landing from'../components/Landing'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


import { getSkillData, getProjectData  } from '../lib/utils';

import Fade from 'react-reveal/Fade';


export default function Home({ skillData, projectData }) {

  return (
    <Layout>
      <Landing></Landing>
      <Fade duration={1000}>
        <About></About>
        <Skills skillData={ skillData }></Skills>
        <Projects projectData={ projectData }></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </Fade>
    </Layout>
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
