import mongoose from "mongoose";

const banksSchema = new mongoose.Schema({
    country: String,
    color: String,
    name: String,
    icon: String,
    url: String,
    created_at: Number,
    updated_at: Number,
    deleted_at: null,
});
const Banks = mongoose.model("Banks", banksSchema, "banks"); // last params is collection name

export default Banks;
