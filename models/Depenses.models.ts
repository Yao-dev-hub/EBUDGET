import { model, models, Schema } from "mongoose";

const DepensesSchema = new Schema({
    titre: { type: String, required: true },
    montant: { type: String, required: true },
    uid: { type: String, required: true },
    budgetId: { type: String, required: true },
    date: { type: Date, required: true, default: new Date() }
})

export const DepenseModel = models.Depenses || model("Depenses", DepensesSchema)