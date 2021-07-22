import SectionHeading from "./SectionHeading";

export default function Contact({ children, props }) {
    return (
        <div id="contact" className="mb-4">
            <SectionHeading title="contact" imgUrl="images/email.png" />
            <div className="p-2">
                <p>Get in touch at <a className="text-blue-400 hover:text-blue-600 transition-all duration-300" href="mailto:anthonyqchao@gmail.com">anthonyqchao@gmail.com</a></p>
            </div>
        </div>
    )
}