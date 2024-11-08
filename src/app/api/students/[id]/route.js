import { Student } from "@/models/Student"
import { NextResponse } from "next/server"

export async function GET(req,{params}) {

    try {
        let id = params.id
        let student = await Student.findById(id)
        return NextResponse.json({
            student
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            error
        },{status:400})
    }
    
}

export async function PUT(req,{params}) {

    try {
        let {name,rollno} = await req.json()

        let updateStu = await Student.findByIdAndUpdate(params.id,{
            name,rollno
        },{new:true})

        return NextResponse.json({
            student : updateStu
        },{status:200})


    } catch (error) {
        return NextResponse.json({
            error
        },{status:400})
    }
    
}