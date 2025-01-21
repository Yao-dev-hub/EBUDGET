import { firebaseConfig } from "@/dataBase/fireBaseConfig"
import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json(firebaseConfig)
}