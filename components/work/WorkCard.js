import TimelineCard from '../TimelineCard';

import Fade from 'react-reveal/Fade';
import { MdLocationOn } from 'react-icons/md';

const WorkCard = ({ company, title, tags, location, startDate, endDate }) => {
    endDate = endDate.length == 0 ? "Present" : endDate;

    return (
      <TimelineCard className="mb-6 lg:mb-8 p-6 w-4/5 h-32">
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-md">{company}</p>
          <p className="font-light text-sm">
            {startDate} - {endDate}
          </p>
        </div>
        <div className="mb-1 flex flex-row">
          <MdLocationOn size={13} className="mt-1 mr-1" />
          <p className="font-light text-sm">{location}</p>
        </div>
        <p className="font-light text-sm mb-1">{title}</p>
        <div className="text-sm italic text-gray-600 font-semibold">
          {tags.map((tag, ind) => {
            return ind != tags.length - 1 ? (
              <span key={tag}> {tag} /</span>
            ) : (
              <span key={tag}> {tag}</span>
            );
          })}
        </div>
      </TimelineCard>
    );
}

export default WorkCard;