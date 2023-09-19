import React, { useState } from 'react'

const Form = () => {


    const [name,setName]=useState('')
    const[desc,setDesc]=useState('')
    const [url,setUrl]=useState('')


    const nameH=(e)=>{
        setName(e.target.value)
    }
    const descH=(e)=>{
        setDesc(e.target.value)
       
    }
    const urlH=(e)=>{
        setUrl(e.target.value)
    }
    const timeH=()=>{
        setTimestamp(new  Date().getTime())
    }
    const [timestamp,setTimestamp]=useState('')
    const addM=(data)=>{

        fetch('https://placementsmedia-19608-default-rtdb.asia-southeast1.firebasedatabase.app/date2.json',{
          method:'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
    
        }).then(res=>res.json())
        .then(data=>console.log(data))
      }

    const subH=(e)=>{
e.preventDefault()


        const data={
            Name: name,
            Desc: desc,
            url: url,
           
        }
        addM(data)
        // props.onAdd(data)
        console.log(data)
setName('')
setDesc('')
setUrl('')
    }
   
    
    
  return (
    <div>
        <form onSubmit={subH}>
            <label htmlFor='name'>Name</label>
            <input id='name' value={name} onChange={nameH} type='text'></input>
            <label htmlFor='desc'>Description</label>
            <input id='desc' value={desc} onChange={descH} type='text'></input>
            <label htmlFor='url'>URL</label>
            <input id='url' value={url} onChange={urlH} type='text'></input>
           
<button>Submit</button>
        </form>
    </div>
  )
}

export default Form