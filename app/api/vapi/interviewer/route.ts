// app/api/interviewer/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    console.log("Interview API called with:", body);

    // You can customize what this returns later for Vapi
    return NextResponse.json({ message: "Interviewer route working!" });
}
