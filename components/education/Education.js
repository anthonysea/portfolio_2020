import EducationCard from '../education/EducationCard';
import SectionHeading from '../SectionHeading';

const Education = ({ educationData, children, props }) => {

    return (
        <div>
            <SectionHeading title='Education' imgUrl='images/graduation-cap.png'/>
            <div className="m-2">
                {educationData.map(({ school, cert, years }) => {
                    return (
                        <EducationCard
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