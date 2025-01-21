import { Schema, model, models } from "mongoose";

const BudgetSchema = new Schema({
    titre: { type: String, required: true },
    emoji: { type: String, required: true },
    fond: { type: Number, required: true },
    depense: { type: Number, required: true },
    reste: { type: Number, required: false },
    uid: { type: String, required: true },
})

export const BudgetsModel = models.Budget || model("Budget", BudgetSchema)