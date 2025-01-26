"use client"
import { useEffect, useState } from 'react'
import CardBudgets from '../../CardBudgets'
import FormDepense from './FormDepense'
import DetailsBudget from './DetailsBudget'
import { ListBudgetType, ParamesID, UsersType } from '@/Type'
import LoadingCard from '../../LoadingCard'


const Page = ({ params }: ParamesID) => {

    const getParams = async () => {
        const { budgetId } = await params
        return budgetId
    }

    const [user, setUser] = useState<UsersType>({})
    const [budget, setItem] = useState<ListBudgetType>({})
    // const [id_budget,]
    const [load, setLoad] = useState(true)

    const GetBuget = async () => {
        const budgetId = await getParams()
        const req = await fetch(`/server/budget-routes/get-budget/budget-details/${budgetId}`, {
            headers: { "Content-type": "application/json" },
            method: "GET"
        })
        const res = await req.json()
        if (res && res !== undefined) {
            setItem(res)
        }
        setTimeout(() => {
            setLoad(false)
        }, 1000);
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userInfo")!))
        GetBuget()
    }, [])


    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-4">
                    {load ? <LoadingCard /> :
                        <>
                            <CardBudgets item={budget} />
                            <button type='submit' className='btn btn-danger p-2 mb-3 form-control rounded-5'>Suuprimer le budget</button>
                        </>
                    }
                    <div className="card my-3">
                        <div className="card-body">
                            <FormDepense uid={user.uid} budgetI />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <DetailsBudget />
                </div>
            </div>
        </div>
    )
}

export default Page