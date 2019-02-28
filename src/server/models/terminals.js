import mongoose from "mongoose";

const terminalsSchema = new mongoose.Schema({
    banks: mongoose.Schema.Types.ObjectId,
    latitude: Number,
    longitude: Number,
    address: String,
    created_at: Number,
    updated_at: Number,
    deleted_at: null,
});

const Terminals = mongoose.model("Terminals", terminalsSchema, "terminals");

export default Terminals;
