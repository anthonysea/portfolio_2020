import { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { IoLogoGithub } from 'react-icons/io';
import { FaExternalLinkAlt } from 'react-icons/fa';

import ThemeContext from '../../context/ThemeContext';
import Card from '../Card';
import styles from './Projects.module.css';

const ProjectCard = ({ name, github, url, description, tags }) => {
    const { dark } = useContext(ThemeContext);

    return (
        <Fade key={ name } duration={1500}>
            <Card className={`${ dark ? "border-gray-800" : "border-gray-300" } ${styles.card}` }>
                <div className={ styles.projectName }>
                    <div>{ name }</div>
                    <div className="flex">
                        <div className="self-center">
                            <a href={ github } target="_blank"><IoLogoGithub color={ dark ? "white" : "#212121"}/></a>
                        </div>
                        { url &&
                        <div className="self-center ml-3">
                            <a href={ url } target="_blank"><FaExternalLinkAlt size="14px" color={ dark ? "white" : "#212121" }/></a>
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
            </Card>
        </Fade>
    )
}

export default ProjectCard;