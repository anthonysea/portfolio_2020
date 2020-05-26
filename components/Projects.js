import SectionHeading from '../components/SectionHeading';
import styles from './Projects.module.css';

import Fade from 'react-reveal/Fade';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Projects({ projectData, children, props }) {
    const { dark } = useContext(ThemeContext)

    return (
        <div id="projects" className="mb-4">
            <SectionHeading title="Projects" imgUrl="images/code.png"/>
            <div className="p-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:col-gap-12 md:gap-8">
                { projectData.map(({ name, description, github, url, tags}) => {
                    return (
                        <Fade key={ name } duration={1500}>
                            <div key={ name } className={`${ dark ? "border-gray-800" : "border-gray-300" } ${styles.card}` }>
                                <div className={ styles.projectName }>
                                    <div>{ name }</div>
                                    <div className="flex">
                                        <div className="self-center">
                                            <a href={ github } target="_blank"><img className={ styles.icon } src="images/github.png"></img></a>
                                        </div>
                                        { url &&
                                        <div className="self-center ml-2">
                                            <a href={ url } target="_blank"><img className={ styles.icon } src="images/external-link.png"></img></a>
                                        </div>
                                        }
                                        
                                    </div>
                                </div>
                                <div className={ styles.projectDescription }>{ description }</div>
                                <div className={ styles.projectTags }>
                                    { tags.map(tag => {
                                        return <span key={ tag } className="mr-2">#{ tag }</span>
                                    })}
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}