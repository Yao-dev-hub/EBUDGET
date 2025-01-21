import { ConnectDB } from "@/dataBase/mongooseConfig"
import { BudgetsModel } from "@/models/Budgets.models"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const { titre, emoji, fond, depense, reste, uid } = await req.json()
    try {
        const bd_response = await ConnectDB()
        if (bd_response === "bdOk") {

            const data = new BudgetsModel({ titre, emoji, fond, depense, reste, uid })
            await data.save()
            return (data && data !== undefined && data !== "")
                ? NextResponse.json("ok")
                : NextResponse.json({ message: "Erreur survenue pendant la création de votre compte" })
        } else {
            return NextResponse.json({ message: "Une erreur est survenue, reesayez plus tard" })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json("Une erreur s'est produit. reessayez ulterieurement")
    }
}