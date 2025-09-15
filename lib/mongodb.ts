import mongoose from "mongoose";

const connectToDB = async () => {
    const url = "mongodb+srv://arashaltafi:arash123%40@arash.zwxkyn8.mongodb.net/wordpress?retryWrites=true&w=majority"

    try {
        if (mongoose.connections[0].readyState) return mongoose.connection;
        await mongoose.connect(url);
        return mongoose.connection;
    } catch (error) {
        console.error('DB connection error:', error);
        return undefined;
    }
}

export default connectToDB