import { useState } from "react";
import Header from "./Components/Header";
import Items from "./Components/Items";



function App() {
  const [test,setTest]=useState('hey')
  const re=()=>{
    setTest('Worked!!!')
  }
  return (
    <div className="App">
      <Header />
      <Items />

     

     
        
       
    </div>
  );
}

export default App;
