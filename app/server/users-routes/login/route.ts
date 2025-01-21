import { auth } from "@/dataBase/fireBaseConfig"
import { UsersModel } from "@/models/Users.models"
import { signInWithEmailAndPassword } from "firebase/auth"
import { ConnectDB } from "@/dataBase/mongooseConfig"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
    const { email, password, tel } = await request.json()
    try {
        const bd_response = await ConnectDB()
        if (bd_response === "bdOk") {

            const userInfo = await signInWithEmailAndPassword(auth, email, password)
            const uid = userInfo.user.uid
            if (uid && uid !== "") {
                const data = await UsersModel.findOne({ uid })
                return NextResponse.json({ message: "ok", data: { uid, nom: data.nom, prenom: data.prenom, photo: data.photo } })
            } else {
                return NextResponse.json({ message: "Email ou mot de passe incorrect" })
            }

        } else {
            return NextResponse.json({ message: "Une erreur est survenue, reesayez plus tard" })
        }
    } catch (error) {
        const errorMessage = error.message
        console.log(errorMessage)
        return NextResponse.json(
            errorMessage === "Firebase: Error (auth/invalid-credential)." ? { message: "Identifiant incorrect" }
                : { message: "Une erreur est survenue" }
        )
    }
}