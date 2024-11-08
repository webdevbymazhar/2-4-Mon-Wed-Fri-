"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const StudentForm = () => {

  let [name,setname] = useState("")
  let [rollno,setrollno] = useState("")
  let [students,setstudents] = useState([])


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
        window.location.reload()
        
     }
    } catch (error) {
        console.log(error);
        
    }
    
  }

  let DeleteStudent = async (id) =>{
   try {
      let res = await fetch("/api/students",{
        method:"DELETE",
        body : JSON.stringify({id})
      })

      if(res){
        console.log("Student Deleted Successfully1");
        fetchData()
        
      }
   } catch (error) {
    console.log(error);
    
   }
   
  }

  let fetchData = async () =>{
    try {
      let res = await fetch("/api/students")
      let finalres = await res.json()
      setstudents(finalres.students)
      // console.log(finalres.students);
      
      
      
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(()=>{
    fetchData()
  },[])

  
 


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
      {
          students.map((student,i)=>{
            return <div>
              <h2>Student Name : {student.name}</h2>
              <h2>Roll No : {student.rollno}</h2>
              <button onClick={()=>DeleteStudent(student._id)} style={{backgroundColor:"red"}}>DELETE</button>
              <Link href={`/update/${student._id}`}><button style={{backgroundColor:"orange",marginLeft:"20px"}}>Update</button></Link>
            </div>
          })
        }
    </div>
  )
}

export default StudentForm
