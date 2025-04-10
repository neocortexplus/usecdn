// InfoPanel component - made global for access from index.html
const InfoPanel = () => {
    // Simple useEffect with mount and unmount logs
    React.useEffect(() => {
        console.log('🟢 InfoPanel MOUNTED');
        
        return () => {
            console.log('🔴 InfoPanel UNMOUNTED');
        };
    }, []);
    
    return (
        <div className="component-box info-panel">
            <h2>Info Panel Component</h2>
            <p>This component has a useEffect that logs mount and unmount.</p>
        </div>
    );
};