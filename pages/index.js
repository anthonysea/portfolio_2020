import Head from 'next/head'

import Layout from '../components/Layout'
import Landing from'../components/Landing'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

import getSkillData from '../lib/utils';


export default function Home({ skillData }) {

  return (
    <Layout>
      <Head>
        <title>Anthony Chao</title>
      </Head>

      <Landing></Landing>
      <About></About>
      <Skills skillData={ skillData }></Skills>
      <Projects></Projects>
    </Layout>
  )
}

export async function getStaticProps() {
  const skillData = getSkillData()

  return {
      props:  { 
        skillData 
      }
  }
}
