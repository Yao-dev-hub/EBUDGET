"use client"

import NavBar from "@/components/navBar";
import { SnackbarProvider } from 'notistack'


function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    if (!localStorage.getItem("userInfo")) {
        document.location.href = "/clients/users-pages/login"
        return;
    } else {
        return (
            <SnackbarProvider>
                <NavBar />
                {children}
            </SnackbarProvider>
        )
    }

}

export default layout




