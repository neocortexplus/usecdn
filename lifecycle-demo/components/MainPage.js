// MainPage component - made global for access from index.html
const MainPage = () => {
    // Simple useEffect with mount and unmount logs
    React.useEffect(() => {
        console.log('🟢 MainPage MOUNTED');
        
        return () => {
            console.log('🔴 MainPage UNMOUNTED');
        };
    }, []);
    
    return (
        <div className="component-box main-page">
            <h2>Main Page Component</h2>
            <p>This component has a useEffect that logs mount and unmount.</p>
        </div>
    );
};