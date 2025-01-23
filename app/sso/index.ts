import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

//Connetion à firebase
export const SsoConnect = async () => {
    try {
        const req = await fetch("/server/users-routes/gmail-connection/auth", {
            method: "GET"
        })
        const firebase = await req.json()
        if (firebase && firebase !== undefined) {
            const app = initializeApp(firebase)
            return getAuth(app)
        }
    } catch (error) {
        console.log(error)
    }
}

//recaptcha verification
// export const GrecaptchaFunc = async (data: () => Promise<void>) => {
//     grecaptcha.ready(() => {
//         grecaptcha.execute('6Lf1pbwqAAAAAD4D9dvpJyqlGH9kAO_jntaPQ3-m', { action: 'submit' }).then(() => {
//             data
//         })
//     })
// }