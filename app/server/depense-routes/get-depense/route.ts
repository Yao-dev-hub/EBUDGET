import { ConnectDB } from "@/dataBase/mongooseConfig";
import { BudgetsModel } from "@/models/Budgets.models";
import { DepenseModel } from "@/models/Depenses.models";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { budgetId } = await req.json()
        const bd_reponse = await ConnectDB()
        if (bd_reponse === "bdOk") {
            const data = await DepenseModel.find({ budgetId })
            if (data && data !== undefined) {
                return NextResponse.json({ data })
            } else {
                return NextResponse.json("Aucune transaction trouvé pour ce budget")
            }
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json("erreur")
    }
}