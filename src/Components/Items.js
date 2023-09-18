import React from "react";
import "./Items.css";
import { useState } from "react";
import { useEffect } from "react";
import logo from '../Images/logo.png'

const Items = () => {
  const [ddata, setDdata] = useState([]);
  const [ss,setSs]=useState('');
  const fetchdata = async () => {
    const response = await fetch(
      'https://placementsmedia-19608-default-rtdb.asia-southeast1.firebasedatabase.app/date2.json'
    );

    const resData = await response.json();
    const loaded_data = [];
    for (const key in resData) {
      console.log(key);
      loaded_data.push({
        id: key,
        name: resData[key].Name,
        desc: resData[key].Desc,
        url: resData[key].url,
      });
      setDdata(loaded_data);
    }
    console.log(ddata);
    //    console.log(fetc)
  };
  
  const searchData=(e)=>{
    
    setSs(e.target.value)
    console.log(ss)
    fetchdata()
   console.log('hey')

  }
  const searchHandler=(e)=>{
    e.preventDefault()

   
    const filterData=ddata.filter((el)=>el.name.includes((ss).toUpperCase()))
    console.log(filterData)
    setDdata(filterData)

  }

 
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <div className="box">
      <form action="" class="search-bar">
	<input onChange={searchData} type="search" name="search"  required />
	<button onClick={searchHandler} class="search-btn" >
		<span>Search</span>
	</button>
</form>
      {/* <input onChange={searchData} type="text" placeholder="Enter"></input>
   
      <button onClick={searchHandler}>SEARCH</button> */}
      </div>
      <div className="Container">
        {ddata.map((el) => (
          <>
            <a  href={el.url}>
              <div className="Card">
                <img src={logo} style={{width:'70%',margin: '5px'}}></img>

                <h3>{el.name}</h3>
                <p style={{marginTop: '2px',fontSize: '13px'}}>{el.desc}</p>
                {/* <button onClick={()=>props.cvalue(props.id)}>Add To Cart</button>  */}
              </div>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Items;
