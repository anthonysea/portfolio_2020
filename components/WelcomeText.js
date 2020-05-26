import Typist from 'react-typist';
import styles from './WelcomeText.module.css';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function WelcomeText({ children }) {
    const { dark } = useContext(ThemeContext)
    return (
        <div >
            <Typist className={styles.code} avgTypingDelay={100}>
                <span className={ dark ? styles.consoleDark : styles.console }>console</span>
                .
                <span className={ dark ? styles.logDark : styles.log }>log</span>
                (<span className={ dark ? styles.stringDark : styles.string }>"Welcome to my website! :~)"</span>)
            </Typist>
        </div>
    )
}