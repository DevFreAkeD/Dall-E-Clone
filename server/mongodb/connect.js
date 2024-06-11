import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log("MongoDB Connection - Success!"))
        .catch((err) => {
            console.log("MongoDB Connection - Failed!");
            console.log(err);
        });
}

export default connectDB;