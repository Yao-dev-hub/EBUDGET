"use client"

import NavBar from "@/components/navBar";


function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = localStorage.getItem("userInfo")
    if (!user) {
        document.location.href = "/clients/users-pages/login"
        return;
    } else {
        return (
            <>
                <NavBar />
                {children}
            </>
        )
    }

}

export default layout




