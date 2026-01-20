import mongoose from "mongoose";

 const connectDB = async (url) => {
    mongoose.connection.on("connected", () => {
        console.log("Mongoose connected to DB");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}`);
};
    export default connectDB;