import SectionHeading from "./SectionHeading";

export default function About({ children, props }) {
    return (

        <div id="about" className="mb-4">
            <SectionHeading title="about me" imgUrl="images/user.png" />
            <div id="about" className="p-2 font-medium">
                <p>
                    Hi, I'm Anthony, I am a Software developer in the Greater Vancouver area with interests in web development, embedded systems, and data science. 
                    Check out the link to my GitHub to see what I'm currently working on!
                </p>
            </div>
        </div>
    )
}