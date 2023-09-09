import React, { useState } from 'react';

function App () {
  const [count, setCount] = useState(0);
  return (<>
      <p>you clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>

  );
}

export default App;
