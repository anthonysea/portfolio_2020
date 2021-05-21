import { useContext } from 'react';


import SectionHeading from '../SectionHeading'
import ThemeContext from '../../context/ThemeContext';


import SkillCard from './SkillCard';

export default function Skills({ skillData, children, props }) {


    return (
        <div id="skills" className="mb-4">
            <SectionHeading title="skills" imgUrl="images/maintenance.png"/>
            <div className="grid grid-cols-1 gap-4 m-2 sm:grid-cols-2 lg:grid-cols-3 md:col-gap-12 md:gap-8">
                {skillData.map(({ imgUrl, skill, description}) => {
                    return (
                        <SkillCard
                            key={ imgUrl }
                            imgUrl={ imgUrl }
                            skill={ skill }
                            description={ description }
                        />
                    )
                })}
            </div>
        </div>
    )
}