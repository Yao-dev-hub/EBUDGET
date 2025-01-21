import { Schema } from "mongoose";

export const DepensesModels = new Schema({
    titre: { type: String, required: true },
    montant: { type: String, required: true },
    uid: { type: String, required: true },
    id: { type: String, required: true }
})