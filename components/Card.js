import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import styles from './Card.module.css'

const Card = ({ children, className}) => {
    const { dark } = useContext(ThemeContext);

    return (
        <div className={`${ className } ${ dark ? "border-gray-800" : "border-gray-400" } ${ styles.card }`}>
            { children }
        </div>
    )
}

export default Card;