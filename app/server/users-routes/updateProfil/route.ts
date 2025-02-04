import { ConnectDB } from "@/dataBase/mongooseConfig"
import { UpdateModels } from "@/models/Update.models"
import { UsersModel } from "@/models/Users.models"
import { NextResponse } from "next/server"


export const POST = async (req: Request) => {
    const { _id, uid, nom, prenom, adresse, pays, tel, profession, email, genre } = await req.json()
    try {
        const db_response = await ConnectDB()
        if (db_response === "bdOk") {
            if (uid && uid !== undefined) {
                console.log(uid)
                const data = await UsersModel.findByIdAndUpdate(_id, { uid, nom, prenom, adresse, pays, tel, profession, email, genre }, { new: true })
                return NextResponse.json({ message: "ok", data })
            }

        } else {
            return NextResponse.json({ message: "Erreur survenue lors de la mise à jour" })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}