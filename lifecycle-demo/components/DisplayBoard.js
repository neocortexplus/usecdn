// DisplayBoard component - made global for access from index.html
const DisplayBoard = () => {
    // Simple useEffect with mount and unmount logs
    React.useEffect(() => {
        console.log('🟢 DisplayBoard MOUNTED');
        
        return () => {
            console.log('🔴 DisplayBoard UNMOUNTED');
        };
    }, []);
    
    return (
        <div className="component-box display-board">
            <h2>Display Board Component</h2>
            <p>This component has a useEffect that logs mount and unmount.</p>
        </div>
    );
};