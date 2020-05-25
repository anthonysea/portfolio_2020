import Head from 'next/head'

import Layout from '../components/Layout'
import Landing from'../components/Landing'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

import { getSkillData, getProjectData  } from '../lib/utils';

import Fade from 'react-reveal/Fade';
import Contact from '../components/Contact'


export default function Home({ skillData, projectData }) {

  return (
    <Layout>
      <Head>
        <title>Anthony Chao</title>
      </Head>

      <Landing></Landing>
      <Fade duration={1000}>
        <About></About>
        <Skills skillData={ skillData }></Skills>
        <Projects projectData={ projectData }></Projects>
        <Contact></Contact>
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
