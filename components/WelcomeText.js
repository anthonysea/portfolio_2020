import Typist from 'react-typist';
import styles from './WelcomeText.module.css';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function WelcomeText({ children }) {
    const { dark } = useContext(ThemeContext)
    return (
        <div >
            <Typist 
                className={styles.code} 
                avgTypingDelay={120}
                cursor={{ hideWhenDone : true}}
            >
                <span className={ styles.console }>console</span>
                .
                <span className={ styles.log }>log</span>(
                <Typist.Backspace count={12} delay={300}></Typist.Backspace>
                <span className={ styles.log }>print</span>
                (<span className={ styles.string }>"Welcome to my website! :~)"</span>)
            </Typist>
        </div>
    )
}