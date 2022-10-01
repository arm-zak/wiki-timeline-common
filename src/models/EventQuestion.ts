import * as mongoose from "mongoose";

export const EventQuestionSchema = new mongoose.Schema({text: String, year: Number, wikipediaSchema: String });
