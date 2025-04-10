// Child2 component that only displays data from parent
const Child2 = ({ message, count }) => {
    return (
        <div className="child-container second-child">
            <h3>Child 2 (Display-Only Child)</h3>
            <p>This child only receives data from parent but doesn't modify it</p>
            <div>
                <p>Message from parent: <strong>{message}</strong></p>
                <p>Count from parent: <strong>{count}</strong></p>
            </div>
            <p><em>Note: This child has no way to update the parent's state</em></p>
        </div>
    );
};