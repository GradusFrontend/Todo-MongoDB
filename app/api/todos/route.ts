import dbConnect from "@/lib/dbConnect";
import todos from "@/models/todos";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const data = await todos.find()

        return NextResponse.json({ message: "ok", data: data }, { status: 200 })
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    await dbConnect();
    try {

        const todo = await req.json()
        console.log(req.json())

        const data = await todos.create(todo)

        return NextResponse.json({ message: "todo created", data: data }, { status: 201 })
    } catch (e) {
        return NextResponse.json({ message: req.body }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    await dbConnect();

    try {

        const id = req.nextUrl.searchParams.get("id")
        
        await todos.findByIdAndDelete(id);

        return NextResponse.json({ massage: `Todo deleted: ${id}` }, {
            status: 200
        })
    } catch (e) {
        return NextResponse.json({ message: e }, { status: 500 })
    }
}


export async function PATCH(req: NextRequest) {
    await dbConnect();
  
    try {
      const id = req.nextUrl.searchParams.get("id")
      const body = await req.json()
           
      const updated = await todos.findByIdAndUpdate(id, { ...body });
  
      return NextResponse.json({ massage: "Todo updated", updated}, {
        status: 200
      })
    } catch (e) {
      return NextResponse.json({ message: e }, { status: 500 })
    }
  }
  