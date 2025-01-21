"use client"

import { SsoConnect } from "@/app/sso";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function GmailConnection() {

    const GmailConnect = async () => {
        try {
            const auth = await SsoConnect()
            const provider = new GoogleAuthProvider()
            const userInfo = await signInWithPopup(auth!, provider)
            if (userInfo && userInfo !== undefined) {
                const { displayName, email, photoURL, uid } = userInfo.user
                localStorage.setItem("userInfo", JSON.stringify(({ uid, nom: displayName!, email: email!, typeConnection: "sso", photo: photoURL })))
                setTimeout(() => {
                    document.getElementById("gredirecte")?.click()
                }, 100);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={() => GmailConnect()} className='btn btn-outline-danger rounded-3' ><i className="fab fa-google"></i> Se connecter avec Gmail</button>
            <a href="/clients/dashbord/dash" id="gredirecte" hidden>redirecte</a>
        </>

    )
}

export default GmailConnection