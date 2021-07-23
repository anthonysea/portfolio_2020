import SectionHeading from "./SectionHeading";

export default function Resume() {
    return (
        <div id="resume" className="mb-4">
            {/* This is a comment i'm adding */}
            <SectionHeading title="resume" imgUrl="images/resume.png" />
            <div className="p-2">
                <p>View my resume <a className="text-blue-400 hover:text-blue-600 transition-colors duration-300" href="anthony_chao_resume.pdf">here</a>!</p>
            </div>
        </div>
    )
}