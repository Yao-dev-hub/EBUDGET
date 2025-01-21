import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tel: { type: String, required: true, unique: true },
    photo: { type: String, required: false },
    uid: { type: String, required: true },
    typeConnection: { type: String, required: true }
})

export const UsersModel = models.Users || model("Users", userSchema)