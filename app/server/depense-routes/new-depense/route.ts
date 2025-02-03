import { ConnectDB } from "@/dataBase/mongooseConfig";
import { BudgetsModel } from "@/models/Budgets.models";
import { DepenseModel } from "@/models/Depenses.models";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { montant, titre, uid, budgetId } = await req.json()
        const bd_reponse = await ConnectDB()
        if (bd_reponse === "bdOk") {

            //On verifie si le plafond du budget n'est pas atteint
            const plafond = await BudgetsModel.findById(budgetId)
            if (plafond && plafond.fond !== undefined) {
                let { fond, depense, nbreTransact } = plafond

                nbreTransact += 1
                depense += montant
                const reste = Number(fond) - Number(depense)
                if (reste >= 0) {

                    //On sauvegarde la transaction
                    const data = new DepenseModel({ montant, titre, uid, budgetId, date: new Date() })
                    await data.save()

                    //On met à jour le budget
                    const budget = await BudgetsModel.findByIdAndUpdate(
                        budgetId,
                        {
                            titre: plafond.titre,
                            emoji: plafond.emoji,
                            fond,
                            depense,
                            uid: plafond.uid,
                            date: plafond.date,
                            nbreTransact
                        },
                        { new: true }
                    )
                    return NextResponse.json({ message: "ok", data, budget })

                } else {
                    console.log("Vous avez atteint votre plafond")
                    return NextResponse.json("Vous avez atteint votre plafond")
                }
            } else {
                return NextResponse.json("Budget non trouvé ou une erreur s'est produit")
            }

        } else {
            return NextResponse.json("Erreur de connexion, vérifiez votre connection internet")
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json("erreur")
    }
}