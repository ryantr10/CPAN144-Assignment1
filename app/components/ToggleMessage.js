// app/components/ToggleMessage.js
import { useState } from 'react';

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Toggle Message</h2>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Message
      </button>
      {show && <p>This is a conditional message!</p>}
    </div>
  );
}
