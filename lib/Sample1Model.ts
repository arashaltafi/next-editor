import { Schema, Document, models, model } from "mongoose";

export interface ISample1 extends Document {
    title: string;
    image: string;
    desc: string;
}

const Sample1Schema = new Schema<ISample1>(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        desc: { type: String, required: true },
    },
    { timestamps: true, versionKey: false }
);

// Prevent recompilation on hot-reload
const Sample1Model = models.Sample1 || model<ISample1>("Sample1", Sample1Schema);

export default Sample1Model;