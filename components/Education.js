import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';

const Education = ({ educationData, children, props }) => {
    return (
        <div>
            <SectionHeading title='Education' imgUrl='images/graduation-cap.png'/>
            <div className="m-2">
                {educationData.map(({ school, cert, years }) => {
                    return (
                        // <div className="mb-6 lg:mb-8 p-4 w-full lg:w-3/4 border border-opacity-75 rounded-sm">
                        <Card className="mb-6 lg:mb-8 p-4 w-full lg:w-3/4">
                            <p>{ school }</p>
                            <p>{ cert }</p>
                            <p className="font-light text-sm">{ years[0] } - { years[1] }</p>
                        </Card>
                        // </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Education;