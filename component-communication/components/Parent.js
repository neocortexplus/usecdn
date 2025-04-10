// components/Parent.js

// Parent component that manages state and passes data to children
const Parent = () => {
    // State that will be shared with child components
    const [message, setMessage] = React.useState("Hello from Parent");
    const [count, setCount] = React.useState(0);
    
    // Function to be passed to Child1 for updating the message
    const updateMessage = (newMessage) => {
        setMessage(newMessage);
    };
    
    // Function to be passed to Child1 for incrementing the count
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    return (
        <div className="parent-container">
            <h2>Parent Component</h2>
            <p>Current message: <strong>{message}</strong></p>
            <p>Current count: <strong>{count}</strong></p>
            
            {/* Pass state and update functions to Child1 */}
            <Child1 
                message={message} 
                updateMessage={updateMessage} 
                incrementCount={incrementCount} 
            />
            
            {/* Pass state but no update functions to Child2 */}
            <Child2 
                message={message} 
                count={count} 
            />
        </div>
    );
};