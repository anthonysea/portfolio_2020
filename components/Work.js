import SectionHeading from '../components/SectionHeading';
import { MdLocationOn } from 'react-icons/md';

const Work = ({ workData, children, props }) => {

    return (
        <div>
            <SectionHeading imgUrl='images/briefcase.png' title='work experience'/>
            <div className="m-2">
                {workData.map(({ company, title, tags, location }) => {
                    return (
                        <div className="p-4 w-3/4">
                            <div className="flex flex-row justify-between">
                                <p className="mb-2 font-semibold text-md">{ company }</p>
                                <div className="flex flex-row"><MdLocationOn size={13} className="m-1"/><p className="font-light text-sm">{ location }</p></div>
                            </div>
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