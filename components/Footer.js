
export default function Footer({ children, props }) {
    return (
        <div className="p-2">
            <p className="text-xs text-gray-300">Licensed under MIT.</p>
            <p className="text-xs text-gray-300">Copyright { new Date().getFullYear() } Anthony  Chao</p>
            <p className="text-xs text-gray-300">All icons from <a href="https://icons8.com">Icons8</a></p>
        </div>
    )
}