import { ConnectDB } from "@/dataBase/mongooseConfig";
import { DepensesModels } from "@/models/Depenses.models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:Request) => {
    const { montant, titre, budgetId } = await req.json()
    try {
        const bd_reponse = await ConnectDB()
        if (bd_reponse === "bdOk") {
            const data = new DepensesModels({montant,titre,budgetId})
        } else {
            NextResponse.json("Erreur survenue lors de la connexion à la base de donnée")
        }
    } catch (error) {
        console.log(error);
        
    }
}