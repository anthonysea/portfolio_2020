import SectionHeading from '../SectionHeading';
import WorkCard from '../work/WorkCard';

const Work = ({ workData, children, props }) => {

    return (
        <div id="work">
            <SectionHeading imgUrl='images/briefcase.png' title='work experience'/>
            <div className="m-2">
                {workData.map(({ company, title, tags, location, startDate, endDate }) => {
                    return (
                        <WorkCard 
                            key={ company }
                            company={ company }
                            title={ title }
                            tags={ tags }
                            location={ location }
                            startDate={ startDate }
                            endDate={ endDate }
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Work;