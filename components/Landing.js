import styles from './Landing.module.css';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import WelcomeText from './WelcomeText';

export default function Landing({ children, props }) {
    const { dark } = useContext(ThemeContext)

    return (
        <div className={ styles.landing }>
            <h1 className={ styles.heading }><a href="/">Anthony Chao</a></h1>
            <WelcomeText/>
            <div className="my-4 flex flex-row justify-center">
                <div className="mx-2 px-2"><a className={ dark ? styles.linkDark : styles.link } href="#about">About</a></div>
                <div className="mx-2 px-2"><a className={ dark ? styles.linkDark : styles.link } href="#skills">Skills</a></div>
                <div className="mx-2 px-2"><a className={ dark ? styles.linkDark : styles.link } href="#work">Work</a></div>
                <div className="mx-2 px-2"><a className={ dark ? styles.linkDark : styles.link } href="#education">Education</a></div>
                <div className="mx-2 px-2"><a className={ dark ? styles.linkDark : styles.link } href="#projects">Projects</a></div>
                <div className="mx-2 px-2"><a className={ dark ? styles.linkDark : styles.link } href="#contact">Contact</a></div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="mx-4 self-center">
                    <a href="https://www.github.com/anthonysea/" target="_blank"><IoLogoGithub size="20px" color={ dark ? "white" : "black" }/></a>
                </div>
                <div className="mx-4 self-center">
                    <a href="https://www.linkedin.com/in/anthony-chao-396540195/" target="_blank"><IoLogoLinkedin size="22px" color={ dark ? "white" : "#2867b2" }/></a>
                </div>
            </div>
        </div>
    )
}