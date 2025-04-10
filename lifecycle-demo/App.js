// Main App component - made global for access from index.html
const App = () => {
    const [showMainPage, setShowMainPage] = React.useState(true);
    const [showDisplayBoard, setShowDisplayBoard] = React.useState(true);
    const [showInfoPanel, setShowInfoPanel] = React.useState(true);
    
    // Simple mount log
    React.useEffect(() => {
        console.log('🟢 App component MOUNTED');
        
        return () => {
            console.log('🔴 App component UNMOUNTED');
        };
    }, []);

    return (
        <div className="app-container">
            <h1>Simple React Lifecycle Demo</h1>
            <p>This demo shows when components mount and unmount with simple console logs.</p>
            
            <div className="controls">
                <button onClick={() => setShowMainPage(!showMainPage)}>
                    {showMainPage ? 'Hide' : 'Show'} Main Page
                </button>
                <button onClick={() => setShowDisplayBoard(!showDisplayBoard)}>
                    {showDisplayBoard ? 'Hide' : 'Show'} Display Board
                </button>
                <button onClick={() => setShowInfoPanel(!showInfoPanel)}>
                    {showInfoPanel ? 'Hide' : 'Show'} Info Panel
                </button>
            </div>
            
            {/* Components will mount/unmount based on state */}
            {showMainPage && <MainPage />}
            {showDisplayBoard && <DisplayBoard />}
            {showInfoPanel && <InfoPanel />}
            
            <div style={{marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5"}}>
                <h3>How to use this demo:</h3>
                <ol>
                    <li>Open your browser console (F12)</li>
                    <li>Click the buttons to mount/unmount components</li>
                    <li>See the mount (🟢) and unmount (🔴) logs in the console</li>
                </ol>
                <p>The empty dependency array <code>[]</code> in useEffect means the effect runs once on mount, 
                and the cleanup function runs on unmount.</p>
            </div>
        </div>
    );
};