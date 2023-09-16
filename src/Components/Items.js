import React from "react";
import "./Items.css";
import { useState } from "react";
import { useEffect } from "react";
import logo from '../Images/logo.png'

const Items = () => {
  const [ddata, setDdata] = useState([]);
  const fetchdata = async () => {
    const response = await fetch(
      "https://placementsmedia-19608-default-rtdb.asia-southeast1.firebasedatabase.app/date2.json"
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
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <div className="Container">
        {ddata.map((el) => (
          <>
            <a  href={el.url}>
              <div className="Card">
                {<img src={logo}></img>}

                <h1>{el.name}</h1>
                <p>{el.desc}</p>
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