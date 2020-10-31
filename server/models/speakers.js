import mongoose from 'mongoose'

const speakersSchema = new mongoose.Schema({
    name: { type: String },
    univ: { type: String, required: true},
    category: { type: Array, required: true },
    experiences: { type: Array, required: true },
});

const speakersModel = mongoose.model("Speakers", speakersSchema);

export default speakersModel;