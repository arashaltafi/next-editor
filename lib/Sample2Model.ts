import { Schema, Document, models, model } from "mongoose";

export interface ISample2 extends Document {
    title: string;
    image: string;
    desc: string;
}

const Sample2Schema = new Schema<ISample2>(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        desc: { type: String, required: true },
    },
    { timestamps: true, versionKey: false }
);

// Prevent recompilation on hot-reload
const Sample2Model = models.Sample2 || model<ISample2>("Sample2", Sample2Schema);

export default Sample2Model;