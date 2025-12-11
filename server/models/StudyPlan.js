import mongoose from "mongoose";

const StudyPlanSchema = new mongoose.Schema({
    planName: String,
    startDate: Date,
    endDate: Date,
    description: String,
    specialConsiderations: String,
    aiSuggestions: String,
},{ timestamps: true });

export default mongoose.model("StudyPlan", StudyPlanSchema);