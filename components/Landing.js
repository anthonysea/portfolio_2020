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
        </div>
    )
}