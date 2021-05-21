import EducationCard from './EducationCard';
import SectionHeading from '../SectionHeading';

const Education = ({ educationData, children, props }) => {
    // test
    return (
        <div id="education">
            <SectionHeading title='Education' imgUrl='images/graduation-cap.png'/>
            <div className="mx-4 mb-4">
                {educationData.map(({ school, cert, years }) => {
                    return (
                        <EducationCard
                            key={ school }
                            school={ school }
                            cert={ cert }
                            years={ years}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Education;