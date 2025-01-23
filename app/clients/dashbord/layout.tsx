"use client"

import NavBar from "@/components/navBar";
import { UsersType } from "@/Type";
import Link from "next/link";
import { SnackbarProvider } from 'notistack'
import { useEffect, useState } from "react";


function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [user, setUser] = useState<UsersType>({})
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setUser(JSON.parse(localStorage.getItem("userInfo")!))
            setLoad(false)
        }, 100);
    }, [])

    if (!load) {
        if (user && user !== undefined) {
            return (
                <SnackbarProvider>
                    <NavBar />
                    {children}
                </SnackbarProvider>
            )
        } else {
            location.href = "/clients/users-pages/login"
            return
        }
    }


}

export default layout




