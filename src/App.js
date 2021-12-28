import "./style.css";
import React, { useState } from 'react';

const App=()=>{

var time= new Date().toLocaleTimeString();

const [ctime, setCtime]=useState(time);

const UpdateTime=()=>{
  time= new Date().toLocaleTimeString();
  setCtime(time);
};

setInterval(() => {
  UpdateTime();
}, 1000);
  return(
    <>
    <h1 id="display">
      {ctime}
    </h1>
    
    </>
  );
}


export default App;
