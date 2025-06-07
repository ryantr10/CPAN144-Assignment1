// app/components/Counter.js
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
}
