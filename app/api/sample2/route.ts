import { NextResponse } from 'next/server';
import { trimStrings } from '@/utils/Global';
import connectToDB from '@/lib/mongodb';
import Sample2Model from '@/lib/Sample2Model';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '20mb'
        }
    }
}

type Sample2Dto = {
    image: string;
    title: string;
    desc: string;
}

export const GET = async () => {
    try {
        await connectToDB();

        const lastItem = await Sample2Model.findOne().sort({ createdAt: -1 }).lean();

        if (!lastItem) {
            return NextResponse.json(
                { success: false, message: "No items found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, data: lastItem },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}

export const POST = async (req: Request) => {
    try {
        await connectToDB();

        const rawBody = (await req.json()) as Sample2Dto;
        const body = rawBody //trimStrings(rawBody);

        const newItem = await Sample2Model.create({
            title: body.title,
            image: body.image,
            desc: body.desc,
        });

        return NextResponse.json(
            { success: true, data: newItem },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}