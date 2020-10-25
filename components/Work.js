import SectionHeading from '../components/SectionHeading';
import { MdLocationOn } from 'react-icons/md';

const Work = ({ workData, children, props }) => {

    return (
        <div>
            <SectionHeading imgUrl='images/briefcase.png' title='work experience'/>
            <div className="m-2">
                {workData.map(({ company, title, tags, location, startDate, endDate }) => {
                    endDate = endDate.length == 0 ? "Present" : endDate;

                    return (
                        <div className="mb-6 lg:mb-8 p-4 w-full lg:w-3/4 border border-opacity-75 rounded-sm">
                            <div className="flex flex-row justify-between">
                                <p className="mb-2 font-semibold text-md">{ company }</p>
                                {/* <div className="flex flex-row"><MdLocationOn size={13} className="m-1"/><p className="font-light text-sm">{ location }</p></div> */}
                                <p className="font-light text-sm">{ startDate } - { endDate }</p>
                            </div>
                            <div className="flex flex-row mb-1 "><MdLocationOn size={13} className="mt-1 mr-1"/><p className="font-light text-sm">{ location }</p></div>
                            <p className="font-light text-sm mb-1">{ title }</p>
                            <div className="text-sm italic text-gray-600 font-semibold">
                            {tags.map((tag, ind) => {
                                return (ind != tags.length-1 ? 
                                <span key={ tag }> { tag } /</span> :
                                <span key={ tag }> { tag }</span>)
                            })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Work;