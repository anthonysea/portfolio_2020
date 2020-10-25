import Fade from 'react-reveal/Fade';
import { useContext } from 'react';

import ThemeContext from '../../context/ThemeContext';
import styles from './Skills.module.css';
import Card from '../Card'

const SkillCard = ({ imgUrl, skill, description }) => {
    const { dark } = useContext(ThemeContext)

    return (
        <Fade key={ imgUrl } duration={1500}>
            <Card className={ styles.card }>
                <img className="icon self-center" src={ imgUrl }></img>
                <div className="ml-2">
                    <p>{ skill }</p>
                    <p className={`${ dark ? "text-gray-400" : "text-gray-700" } font-light`}>{ description }</p>
                </div>
            </Card>
        </Fade>
    )
}

export default SkillCard;