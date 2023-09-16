import { useState } from "react";
import Header from "./Components/Header";
import Items from "./Components/Items";



function App() {
  const [test,setTest]=useState('hey')
  const fetchdata=async ()=>{
       
    
    const response=await fetch('https://placementsmedia-19608-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
    
   const fetc=await response.json()
   
   console.log(fetc)
}
  return (
    <div className="App">
     
      <Header />
      <Items />

     

     
        
       
    </div>
  );
}

export default App;
