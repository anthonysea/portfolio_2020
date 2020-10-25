import Card from '../Card'
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

const EducationCard = ({ school, cert, years }) => {
    const { dark } = useContext(ThemeContext)

    return (
        <Card className="mb-6 lg:mb-8 p-4 w-full lg:w-3/4">
            <p>{ school }</p>
            <p className="font-light mb-1">{ cert }</p>
            <p className={`${ dark ? "text-gray-400" : "text-gray-700" } text-sm font-light`}>{ years[0] } - { years[1] }</p>
        </Card>
    )
}

export default EducationCard;