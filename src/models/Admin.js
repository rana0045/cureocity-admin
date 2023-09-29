import mongoose, { Schema, model, models } from "mongoose";

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "user name isrequired"],

    },
    email: {
        type: String,
        required: true,
        unique: [true, "email is already exist"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"]
    },
    password: {
        type: String,
        required: true,
        min: [6, "password lenght sould be greater then 6"]
    },

    isAdim: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: "super admin"
    },
    imageUrl: String,
})


const User = mongoose.models.admin || mongoose.model("admin", AdminSchema)


export default User