import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [status, setStatus] = useState(messages[0]);

  return (
    <div class="status-widget">
      <p>{status}</p>
      <button onClick={() => setStatus(randomMessage())}>
        Siguiente estado
      </button>
    </div>
  );
}
