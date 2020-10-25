

const TwoColumn = ({ children }) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            { children }
        </div>
    );
}


export default TwoColumn;