import React, { useState } from 'react';

function Counter() {
    const [valueChange, setValueChange] = useState(0);
    return (
        <div>
            <p id="value">{valueChange}</p>
            <button onClick={() => setValueChange(e => e + 1)} id="increment">+</button>
            <button onClick={() => setValueChange(e => e - 1)}id="decrement">-</button>
        </div>
    )
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    
    return <Counter />;
}

// Do not​​​​​​‌​‌​​​​​‌​‌‌‌‌​‌​‌‌‌‌​‌‌​ change
export default Counter;