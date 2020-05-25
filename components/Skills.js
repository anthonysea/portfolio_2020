import Fade from 'react-reveal/Fade';

import SectionHeading from '../components/SectionHeading'

export default function Skills({ skillData, children, props }) {
    return (
        <div id="skills" className="mb-4">
            <SectionHeading title="skills" imgUrl="images/maintenance.png"/>
            <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-2 lg:grid-cols-3 md:col-gap-12 md:gap-8">
                {skillData.map(({ imgUrl, skill, description}) => {
                    return (
                        <Fade duration={1500}>
                            <div data-aos="fade-in" key={ imgUrl } className="flex border rounded-dm shadow-sm p-2">
                                <img className="icon self-center" src={ imgUrl }></img>
                                <div className="ml-2">
                                    <p className="text-gray-800">{ skill }</p>
                                    <p className="text-gray-700">{ description }</p>
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )
}