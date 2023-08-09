import { NextResponse } from "next/server"

export async function POST(request: Request) {
    console.log(JSON.stringify(request.body))

    return NextResponse.json('registered')
}