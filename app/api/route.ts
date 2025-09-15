import { NextResponse } from 'next/server';

export const GET = () => {
    return NextResponse.json({ message: 'Welcome To My Application!' }, { status: 200 });
}

export const POST = () => {
    return NextResponse.json({ message: 'Welcome To My Application!' }, { status: 200 });
}

export const DELETE = () => {
    return NextResponse.json({ message: 'Welcome To My Application!' }, { status: 200 });
}

export const PUT = () => {
    return NextResponse.json({ message: 'Welcome To My Application!' }, { status: 200 });
}

export const PATCH = () => {
    return NextResponse.json({ message: 'Welcome To My Application!' }, { status: 200 });
}