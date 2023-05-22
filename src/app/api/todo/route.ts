import { NextRequest, NextResponse } from "next/server";
import { Todo, newTodo, db, todoTable } from "@/lib/drizzle"
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {

    try {

        const res = await db.select().from(todoTable)

        //  console.log(res); 
        return NextResponse.json({ getData: res })

    } catch (err) {
        console.log((err as { message: string }).message);
        return NextResponse.json({ message: "something went wrong" })
    }
}



export async function POST(request: NextRequest) {
    const req = await request.json()

    try {
        if (req.task) {
            const res = await db.insert(todoTable).values({
                task: req.task
            }
            ).returning();
            //   console.log(res);
            return NextResponse.json({ data: res })
        }
    } catch (error) {
        return NextResponse.json({ message: (error as { message: string }).message })
    }
}