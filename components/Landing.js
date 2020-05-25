import styles from './Landing.module.css';

export default function Landing({ children, props }) {

    return (
        <div className={ styles.landing }>
            <h1 className={ styles.heading }><a href="/">Anthony Chao</a></h1>
            <p>Welcome to my website :~)</p>
            <div className="my-4 flex flex-row justify-center">
                {/* <span className="mx-2 px-2" onClick={() => scrollTo('#about')}>About</span> */}
                <div className="mx-2 px-2"><a href="#about">About</a></div>
                <div className="mx-2 px-2"><a href="#skills">Skills</a></div>
                <div className="mx-2 px-2"><a href="#projects">Projects</a></div>
                <div className="mx-2 px-2"><a href="#contact">Contact</a></div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="mx-4 self-center"><a href="https://www.github.com/anthonysea/"><img className="githubIcon" src="images/github.png"></img></a></div>
                <div className="mx-4 self-center"><a href="https://www.linkedin.com/in/anthony-chao-396540195/"><img className="icon" src="images/linkedin.png"></img></a></div>
            </div>
        </div>
    )
}