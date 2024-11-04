//GET,POST,PUT,PATCH,DELETE

import dbConnect from "@/dbConnect";
import { Student } from "@/models/Student";
import { NextResponse } from "next/server";

export async function POST(req) {
      await dbConnect()
    try {
        let {name,rollno} = await req.json()

      let student = Student({
        name, rollno
      })

      let newStudent = await student.save()

      return NextResponse.json({
        success: true,
        student: newStudent,
      }, { status: 200 });
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