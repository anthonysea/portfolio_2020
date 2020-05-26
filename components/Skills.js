import Fade from 'react-reveal/Fade';

import SectionHeading from '../components/SectionHeading'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import styles from './Skills.module.css';

export default function Skills({ skillData, children, props }) {
    const { dark } = useContext(ThemeContext)

    return (
        <div id="skills" className="mb-4">
            <SectionHeading title="skills" imgUrl="images/maintenance.png"/>
            <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-2 lg:grid-cols-3 md:col-gap-12 md:gap-8">
                {skillData.map(({ imgUrl, skill, description}) => {
                    return (
                        <Fade key={ imgUrl } duration={1500}>
                            <div className={`${ dark ? "border-gray-800" : "border-gray-400" } ${styles.card}`}>
                                <img className="icon self-center" src={ imgUrl }></img>
                                <div className="ml-2">
                                    <p>{ skill }</p>
                                    <p className={`${ dark ? "text-gray-400" : "text-gray-700" } font-light`}>{ description }</p>
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}