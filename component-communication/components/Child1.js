// Child1 component that directly modifies parent state
const Child1 = ({ message, updateMessage, incrementCount }) => {
    return (
        <div className="child-container">
            <h3>Child 1 (Interactive Child)</h3>
            <p>Message received: <strong>{message}</strong></p>
            
            <div>
                <input 
                    type="text" 
                    value={message} 
                    onChange={(e) => updateMessage(e.target.value)} 
                    placeholder="Enter new message" 
                />
            </div>
            
            <div style={{marginTop: "10px"}}>
                <button onClick={incrementCount}>Increment Count in Parent</button>
            </div>
        </div>
    );
};