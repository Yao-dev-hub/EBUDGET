import { ConnectDB } from "@/dataBase/mongooseConfig"
import { BudgetsModel } from "@/models/Budgets.models"
import { ParamesID } from "@/Type"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: ParamesID) => {
    try {
        const { uid } = await params

        if (uid && uid !== undefined && uid !== "") {
            const bd_response = await ConnectDB()
            if (bd_response === "bdOk") {

                const data = await BudgetsModel.find({ uid })
                return (data && data !== undefined)
                    ? NextResponse.json(data)
                    : NextResponse.json("Aucun budget trouvé")
            } else {
                return NextResponse.json("Une erreur est survenue, reesayez plus tard")
            }
        } else {
            return NextResponse.json("utilisateur non reconnu")
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json("Une erreur s'est produit. reessayez ulterieurement")
    }
}