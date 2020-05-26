import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';


export default function Footer({ children, props }) {
    const dark = useContext(ThemeContext)

    return (
        <div className="p-2">
            <p className={`${ dark ? "text-gray-800" : "text-gray-300"} text-xs`}>Licensed under MIT.</p>
            <p className={`${ dark ? "text-gray-800" : "text-gray-300"} text-xs`}>Copyright { new Date().getFullYear() } Anthony  Chao</p>
            <p className={`${ dark ? "text-gray-800" : "text-gray-300"} text-xs`}>All icons from <a href="https://icons8.com">Icons8</a></p>
        </div>
    )
}