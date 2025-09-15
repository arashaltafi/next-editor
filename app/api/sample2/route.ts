import { NextResponse } from 'next/server';

export function GET() {
    return NextResponse.json({ message: 'Welcome To My Application!' }, { status: 200 });
}

export function POST() {
    return NextResponse.json({ message: 'Welcome To My Application!' }, { status: 200 });
}