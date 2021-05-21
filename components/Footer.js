import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';


export default function Footer({ children, props }) {
    const { dark } = useContext(ThemeContext)

    return (
        <div className={`${ dark ? "text-gray-800" : "text-gray-300"} p-2 text-xs`}>
            <p>Licensed under MIT.</p>
            <p>Copyright { new Date().getFullYear() } Anthony  Chao</p>
            <p>Icons from <a href="https://icons8.com">Icons8</a> and <a href="https://github.com/react-icons/react-icons">react-icons</a></p>
        </div>
    )
}