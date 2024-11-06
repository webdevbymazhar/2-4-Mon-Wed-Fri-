"use client"
import React, { useState } from 'react'

const StudentForm = () => {

  let [name,setname] = useState("")
  let [rollno,setrollno] = useState("")


  let SubmitData = (e) =>{
    e.preventDefault()
    try {
        let jsonData = JSON.stringify({name,rollno})
    
     let res = fetch("/api/students",{
        method:"POST",
        body:jsonData
     })

     if(res){
        console.log("Data submitted Successfully!");
        
     }
    } catch (error) {
        console.log(error);
        
    }
    
  }

  
 


  return (
    <div>
      <h1 style={{fontSize:"32px"}} >Student Registration Form </h1>
      <form style={{border:"1px solid black", width:"300px"}} >

        <label htmlFor="stuname">Student Name : </label>
        <input value={name} onChange={(e)=>setname(e.target.value)} id='stuname' type="text" placeholder='Enter Student Name' />
        <br />
        <label  htmlFor="rollno">Roll No : </label>
        <input value={rollno} onChange={(e)=>setrollno(e.target.value)} id='rollno' type="text" placeholder='Enter Roll no' />
        <br />

        <button onClick={SubmitData} style={{border:"1px solid black",padding:"10px"}}>Submit</button>



      </form>
    </div>
  )
}

export default StudentForm
