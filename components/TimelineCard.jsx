import { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';
import styles from './TimelineCard.module.css'

const TimelineCard = ({ children, className }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`${className} ${ dark ? "gray-800" : "gray-400" } ${ styles.container }`}>
      { children }
    </div>
  )
}

export default TimelineCard;