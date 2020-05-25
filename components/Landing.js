

export default function Landing({ children, props }) {

    const scrollTo = (section) => {
        if (typeof window !== "undefined") {
            console.log(window)
            window.scrollTo(section)
        }
    }

    return (
        <div className="min-h-screen flex flex-col text-center justify-center">
            <div className="top-banner">
                <h1 className="text-5xl font-semibold">Anthony Chao</h1>
                <p>Welcome to my website :~)</p>
                <div className="my-4 flex flex-row justify-center">
                    {/* <span className="mx-2 px-2" onClick={() => scrollTo('#about')}>About</span> */}
                    <div className="mx-2 px-2"><a href="#about">About</a></div>
                    <div className="mx-2 px-2"><a href="#skills">Skills</a></div>
                    <div className="mx-2 px-2"><a href="#projects">Projects</a></div>
                    <div className="mx-2 px-2"><a href="#contact">Contact</a></div>
                </div>
            </div>
        </div>
    )
}