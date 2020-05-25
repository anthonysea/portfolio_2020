
export default function SectionHeading({ imgUrl, title }) {
    return (
        <div className="flex p-2">
            <img className="self-center heading-icon"src={ imgUrl }></img>
            <h1 className="ml-2 font-bold text-gray-700">{ title.toUpperCase() }</h1>
        </div>
    )
}