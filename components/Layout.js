
export default function Layout({ children, props }) {
    return (
        <div className="container mx-auto flex flex-col">
            { children }
        </div>
    )
}