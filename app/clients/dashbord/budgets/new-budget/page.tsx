"use client"
import { useEffect, useState } from 'react'
import CardBudgets from '../../CardBudgets'
import AddBudget from './AddBudget'
import { ListBudgetType, UsersType } from '@/Type'
import LoadingCard from '../../LoadingCard'


function page() {

    const [uid, setUid] = useState("")
    const [budget, setItem] = useState<ListBudgetType[]>([])
    const [load, setLoad] = useState(true)


    const BudgetListFunc = (e: ListBudgetType) => {
        console.log(e)
        setItem([...budget, e])
    }

    const GetBuget = async (user: UsersType) => {
        if (user && user !== undefined) {
            try {
                const req = await fetch(`/server/budget-routes/get-budget/all-budget/${user.uid!}`, {
                    headers: { "Content-type": "application/json" },
                    method: "GET"
                })
                const res = await req.json()
                if (res && res !== undefined) {
                    setItem(res)
                }
                setTimeout(() => {
                    setLoad(false)
                    setUid(user.uid!)
                }, 2000);
            } catch (error) {
                console.log(error)
            }
        }

    }

    useEffect(() => {
        GetBuget(JSON.parse(localStorage.getItem("userInfo")!))
    }, [])


    return (
        <div className='container mt-5 '>
            {load ? (
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <LoadingCard />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <LoadingCard />
                    </div>
                    <div className="col-lg-4 mb-3">
                        <LoadingCard />
                    </div>
                </div>
            ) : (
                <>
                    <div className="row">
                        <div className="col-md-3 my-1">
                            <AddBudget uid={uid} BudgetListFunc={BudgetListFunc} />
                        </div>
                    </div >

                    {budget && budget.length > 0 ? (
                        <div className="row">
                            {budget.map(item => (
                                <div className="col-lg-4" key={item?._id}>
                                    <CardBudgets item={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2 className="h5 fw-bold p-3 bg-danger text-white rounded-3">Vous avez aucun budget créé.</h2>
                        </div>
                    )}
                </>
            )}
        </div >
    )
}

export default page