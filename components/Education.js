import SectionHeading from '../components/SectionHeading';

const Education = ({ educationData, children, props }) => {
    return (
        <div>
            <SectionHeading title='Education' imgUrl='images/graduation-cap.png'/>
            <div className="m-2">
            {educationData.map(({ school, cert, years }) => {
                return (
                    <>
                        <p>{ school }</p>
                        <p>{ cert }</p>
                        <p>{ years[0] } - { years[1] }</p>
                    </>
                )
            })}
            </div>
        </div>
    );
}

export default Education;