import { NextResponse } from "next/server";

export function GET(){
    
    return NextResponse.json({
        name:"sahnawaz",
        Skill:"Node js ,MongoDB,EXXpress,React Js,Websocket,Prisma,Postgress SQL,NextJs,Next AUTH,Framer Motion,ZOD"
    })
}

export function POST(){
    
    return NextResponse.json({
        name:"sahnawaz",
        email:"email@gmail.com"
    })
}

export function PUT(){
    
    return NextResponse.json({
        name:"sahnawaz",
        email:"email@gmail.com",
        Skill:"Node js ,MongoDB,EXXpress,React Js,Websocket,Prisma,Postgress SQL,NextJs,Next AUTH,Framer Motion,ZOD"
    })
}
