import SectionHeading from '../SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects({ projectData, children, props }) {

    return (
        <div id="projects" className="mb-4">
            <SectionHeading title="Projects" imgUrl="images/code.png"/>
            <div className="p-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:col-gap-12 md:gap-8">
                { projectData.map(({ name, description, github, url, tags}) => {
                    return (
                        <ProjectCard
                            key={ name }
                            name={ name }
                            description={ description }
                            github={ github }
                            url={ url }
                            tags= { tags }
                        />
                    )
                })}
            </div>
        </div>
    )
}