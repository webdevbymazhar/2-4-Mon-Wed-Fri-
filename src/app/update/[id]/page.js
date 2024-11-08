"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Update = ({params}) => {
    let [name,setname] = useState("")
  let [rollno,setrollno] = useState("")

  let router = useRouter()


  let fetchData = async () =>{
    try {
        let res = await fetch(`/api/students/${params.id}`)
        let finalres = await res.json()
        if(finalres){
            setname(finalres.student.name)
            setrollno(finalres.student.rollno)
        }
        
    } catch (error) {
        console.log(error);
        
    }
  }

  let UpdateStudent = async (e) =>{
    e.preventDefault()
    try {
        let res = await fetch(`/api/students/${params.id}`,{
          method:"PUT",
          "Content-Type" : "application/json",
          body:JSON.stringify({name,rollno})
        })

        if(res){
            console.log("Student Updated Successfully!");
            router.push("/")
            
        }
    } catch (error) {
        
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

        <button onClick={UpdateStudent} style={{border:"1px solid black",padding:"10px"}}>Update</button>

      </form>
    </div>
  )
}

export default Update
