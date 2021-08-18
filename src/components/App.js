import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);
  const handleDouble = () => { alert("cant edit it") };
  const handleClicks = () => { setCount(count + 1) };
  

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={handleDouble}>{count}</h1>
      <button className='increment-button' onClick={handleClicks}>Increment</button>
    </div>
  )
}


export default App;