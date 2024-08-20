import mongoose, { connect, mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://webdeveloper:Vision8888@cluster0.zpsjckr.mongodb.net/food_del').then(() => console.log("DB Connected"))
}