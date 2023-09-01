import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  const [colour,setColour]=useState(false);


 function addHandler()
 {
  setCount(count+1);
 }
 function subHandler()
 {
  setCount(count-1);
 }
 function resetHandler()
 {
  setCount(0);
 }
 function overHandler()
 {
  setColour(true)
 }
 function outHandler()
 {
  setColour(false)
 }

    return (
    <div className="App" >
       
          <button className='b1' onClick={addHandler}>+</button>
          <p className='p'> {count}</p>
          <button className='b2' onClick={subHandler}>-</button>
           
          
          <button className='b3' onClick={resetHandler} onMouseOver={overHandler} style={{backgroundColor:colour?'yellow':'blue'}} onMouseOut={outHandler}>Reset</button>
       

    </div>
  );
}

export default App;
