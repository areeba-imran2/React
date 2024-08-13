import React, { useState, useEffect } from 'react';

function MyComponent1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This runs after the component mounts
    console.log('Component mounted');

    // Cleanup function runs before the component unmounts
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means this runs only once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent1;