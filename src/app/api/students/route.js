//GET,POST,PUT,PATCH,DELETE

import dbConnect from "@/dbConnect";
import { Student } from "@/models/Student";
import { NextResponse } from "next/server";

export async function POST(req) {
      await dbConnect()
    try {
        let {name,rollno} = await req.json()

      let student = Student({
        name,rollno
      })

      let newStudent = await student.save()

      return NextResponse.json({
        success:true,
        newStudent
      })
    } catch (error) {
        return NextResponse.json({
            message: error.message || "An error occurred",
          }, { status: 400 });
    }
    
}

export async function GET(req){
  await dbConnect()
  try {
     let students = await Student.find()
     return NextResponse.json({
      students
     },{status:200})
  } catch (error) {
    return NextResponse.json({
      message: error.message || "An error occurred",
    }, { status: 400 });
  }
}


export async function DELETE(req) {

  try {
     let {id} = await req.json()
     
     await Student.findByIdAndDelete(id)

     return NextResponse.json({
      message : "Student deleted successfully"
     },{status:200})
  } catch (error) {
    return NextResponse.json({
      message : error.message
    },{status:400})
  }
  
}