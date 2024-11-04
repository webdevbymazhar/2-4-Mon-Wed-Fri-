"use client"
import { useState } from "react";

export default function Home() {

  let [data,setdata] = useState({
    name : "",
    rollno : ""
  })

  let handleChange = (e) =>{
    setdata({...data,[e.target.name] : e.target.value})
    console.log(data);
  }



  let handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      let res = await fetch("/api/students",{
        method:"POST",
        headers:{
          "content-type" : "Appliation/json",
        },
        body:JSON.stringify(data)
      })

      let finalres = await res.json();
      console.log(finalres);
      
      

    } catch (error) {
      console.log(error);
      
    }
  }


  return (
   <div>
     <h1 style={{fontSize:"50px"}}>Student Registration App</h1>
     <form >
      <label htmlFor="">Name</label>
      <input value={data.name} name="name" onChange={(e)=>handleChange(e)} style={{border:"1px solid black"}} type="text" />
      <br />
      <label htmlFor="">Roll no</label>
      <input value={data.rollno} name="rollno" onChange={(e)=>handleChange(e)} style={{border:"1px solid black"}} type="text" />
      <br />
      <button onClick={(e)=>handleSubmit(e)} style={{border:"1px solid black"}}>Submit</button>
     </form>
   </div>
  );
}
