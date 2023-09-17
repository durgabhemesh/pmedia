import { useState } from "react";
import Header from "./Components/Header";
import Items from "./Components/Items";
import AddData from "./Components/AddData"
import Homepage from "./Components/Homepage";
import { Route,Routes } from 'react-router-dom';



function App() {
  const [test,setTest]=useState('hey')
  const fetchdata=async ()=>{
       
    
    const response=await fetch('https://placementsmedia-19608-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
    
   const fetc=await response.json()
   
   console.log(fetc)
}
  return (
    <div className="App">
     
    
      <Routes>
        <Route path="pmedia" element={<Homepage />}></Route>
      <Route path='/admin' element={ <AddData />} />
      </Routes>
     

     

     
        
       
    </div>
  );
}

export default App;
