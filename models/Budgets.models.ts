import { Schema, model, models } from "mongoose";

const BudgetSchema = new Schema({
    titre: { type: String, required: true },
    emoji: { type: String, required: true },
    fond: { type: Number, required: true },
    depense: { type: Number, required: true, default: 0 },
    uid: { type: String, required: true },
    date: { type: Date, default: new Date() },
    nbreTransact: { type: Number, default: 0 }
})

export const BudgetsModel = models.Budget || model("Budget", BudgetSchema)