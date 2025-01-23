
import { Params } from "next/dist/server/request/params"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Une erreur s'est produit. reessayez ulterieurement" })
    }
}