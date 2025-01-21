import { NextResponse } from "next/server" // Module permettant de retourner des reponses comme res en node js
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/dataBase/fireBaseConfig"
import { UsersModel } from '@/models/Users.models'
import { ConnectDB } from "@/dataBase/mongooseConfig"


export const POST = async (request: Request) => {           //Presiser toujours la méthode et si c'est post ,il faut mettre un paramettre
    const { nom, prenom, email, password, tel } = await request.json()
    try {
        const bd_response = await ConnectDB()
        if (bd_response === "bdOk") {
            const userInfo = await createUserWithEmailAndPassword(auth, email, password)
            const uid = userInfo.user.uid
            const newUser = new UsersModel({ uid, nom, prenom, email, tel, typeConnection: "standard", photo: "" })
            await newUser.save()
            return (newUser && newUser !== undefined && newUser !== "")
                ? NextResponse.json({ message: "ok", data: { uid, nom, prenom, photo: "" } })
                : NextResponse.json({ message: "Erreur survenue pendant la création de votre compte" })

        } else {
            return NextResponse.json({ message: "Une erreur est survenue, reesayez plus tard" })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Une erreur est survenue" })
    }
}