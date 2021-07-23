import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import styles from './Card.module.css'

const Card = ({ children, className}) => {
    const { dark } = useContext(ThemeContext);

    return (
        <div className={`${ className } ${ dark ? "border-gray-700": "border-gray-300" } ${ styles.card }`}>
            { children }
        </div>
    )
}

export default Card;