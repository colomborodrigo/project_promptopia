import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    
    if (isConnected){
        console.log("Already connected to DB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            usenewurlparser: true,
            useunifiedtopology: true,
        })

        isConnected = true;

        console.log("Connected to DB");

    } catch (error) {
        console.log(error);
    }

}
