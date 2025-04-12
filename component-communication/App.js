// Main App component - made global for access from index.html
const App = () => {
    return (
        <div>
            <h1>Component Communication Demo</h1>
            <p>This demonstrates data flow between parent and child components</p>
            
            {/* Parent component will manage state and pass data to children */}
            <Parent />
            
            <div style={{marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5"}}>
                <h3>How this demo works:</h3>
                <ul>
                    <li>The Parent component maintains state that is passed to both children</li>
                    <li>Child1 can modify the parent state through callback functions</li>
                    <li>Child2 displays the data but doesn't modify it (one-way communication)</li>
                    <li>This demonstrates both parent-to-child and child-to-parent communication</li>
                </ul>
            </div>
        </div>
    );
};

// Render the App component into the root div /react 18
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// react 17
// ReactDOM.render(<App />, document.getElementById('root'));