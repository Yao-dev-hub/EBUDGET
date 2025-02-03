"use client"
import { useEffect, useState, useRef } from 'react'
import CardBudgets from '../../CardBudgets'
import FormDepense from './FormDepense'
import DetailsBudget from './DetailsBudget'
import { DepenseType, ListBudgetType, ParamesID, UsersType } from '@/Type'
import LoadingCard from '../../LoadingCard'
import { useSnackbar } from 'notistack'
import Loading from '../../Loading'


const Page = ({ params }: ParamesID) => {

    const getParams = async () => {
        const { budgetId } = await params
        return budgetId
    }

    const formRef = useRef<HTMLFormElement | null>(null);

    const [user, setUser] = useState<UsersType>({})
    const [budget, setItem] = useState<ListBudgetType>({})
    const [budgetId, setBudgetId] = useState("")
    const [listTransactions, setListransactions] = useState<DepenseType[]>([])

    const [load, setLoad] = useState(true)

    //On recupère les budgets
    const GetBuget = async () => {
        const id = await getParams()
        setBudgetId(id!)
        const req = await fetch(`/server/budget-routes/get-budget/budget-details/${id}`, {
            headers: { "Content-type": "application/json" },
            method: "GET"
        })
        const res = await req.json()
        if (res && res !== undefined) {
            setItem(res)
        }
        setTimeout(() => {
            setLoad(false)
        }, 600);
    }

    //on recupèes les dépenses
    const GetDepense = async () => {
        const id = await getParams()
        const req = await fetch(`/server/depense-routes/get-depense/`, {
            headers: { "Content-type": "application/json" },
            method: "post",
            body: JSON.stringify({ budgetId: id })
        })
        const res = await req.json()
        if (res && res.data !== undefined) {
            const data: DepenseType[] = res.data.sort((a: DepenseType, b: DepenseType) => {
                const dateA = a.date ? new Date(a.date).getTime() : 0;
                const dateB = b.date ? new Date(b.date).getTime() : 0;
                return dateB - dateA;
            });

            setListransactions(data)
        }
    }


    const [montant, setMontant] = useState(0)
    const [titre, setTitre] = useState("")
    const [loadform, setLoadform] = useState(false)
    const [message, setMessage] = useState("")

    const { enqueueSnackbar } = useSnackbar()


    //On recupère les variables
    const montantSaisie = (e: React.ChangeEvent<HTMLInputElement>) => setMontant(Number(e.target.value))
    const TitreSaisie = (e: React.ChangeEvent<HTMLInputElement>) => setTitre(e.target.value)

    //On créé une depense
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoadform(true)
            const req = await fetch(`/server/depense-routes/new-depense`, {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({ montant, titre, uid: user.uid, budgetId })
            })

            const res = await req.json()
            if (res && res.message === "ok") {
                enqueueSnackbar("Depense ajoutée avec succès", { variant: "success" })
                let data: DepenseType[] = listTransactions || []
                data.push(res.data)

                data = data.sort((a: DepenseType, b: DepenseType) => {
                    const dateA = a.date ? new Date(a.date).getTime() : 0;
                    const dateB = b.date ? new Date(b.date).getTime() : 0;
                    return dateB - dateA;
                });

               setListransactions(data)
                GetBuget()
                formRef.current?.reset();
            } else {
                enqueueSnackbar(res, { variant: "error" })
            }
            setLoadform(false)
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Erreur lors de la soumission des données", { variant: "error" })
            setLoadform(false)
        }
    }

    //Le useEffect recupèr les données du budget et des depenses au chargements du componsant
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userInfo")!))
        GetBuget()
        GetDepense()
    }, [])
    
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    {load ? <LoadingCard /> :
                        <>
                            <CardBudgets item={budget} />
                            <button type='submit' className='btn btn-danger p-2 mb-3 form-control rounded-5'>Suuprimer le budget</button>
                        </>
                    }
                    <div className="card my-3">
                        <div className="card-body">
                            <FormDepense formRef={formRef} loadform={loadform} submitForm={submitForm} montantSaisie={montantSaisie} TitreSaisie={TitreSaisie} />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    {load ? (
                        <Loading />
                    ) :
                        <>
                            {listTransactions && listTransactions.length > 0 ? (
                                <DetailsBudget listTransactions={listTransactions} />
                            ) : (
                                <p className="">Aucune transaction effectuée sur ce budget</p>
                            )}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page