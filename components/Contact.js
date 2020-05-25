import SectionHeading from "./SectionHeading";

export default function Contact({ children, props }) {
    return (
        <div id="contact" className="mb-4">
            <SectionHeading title="contact" imgUrl="images/email.png" />
            <div className="p-2 text-gray-700">
                <p>Get in touch at <a href="mailto:anthonyqchao@gmail.com">anthonyqchao@gmail.com</a></p>
            </div>
        </div>
    )
}