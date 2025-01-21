"use server"
import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false

export const ConnectDB = async () => {
    if (isConnected) return "bdOk"
    try {
        console.log(process.env.mongoUrl)
        await mongoose.connect(
            process.env.mongoUrl!,  // "!" à la fin d'une variable empeche une vairable d'etre vide
            {
                dbName: "BD_EBUDGET",
                useNewUrlParser: true, // pour éviter des avertissements de dépréciation
                useUnifiedTopology: true, // pour une gestion améliorée des connexions
            } as ConnectOptions
        )
        console.log("connexion reussie à la base de donnée")
        isConnected = true
        return "bdOk"
    } catch (error) {
        console.log(error);
    }
}


