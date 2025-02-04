import { model, models, Schema } from "mongoose";

const UpdateSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tel: { type: String, required: true, unique: true },
    photo: { type: String, required: false },
    uid: { type: String, required: true },
    
    typeConnection: { type: String, required: true }
})

export const UpdateModels = models.Users || model("Users", UpdateSchema)