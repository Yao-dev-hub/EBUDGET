import React, { useState } from 'react'

function TransacForm() {
    const [date, setDate] = useState("")
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")

    const getDate = async () => {
        setLoad(true)
        setMessage("")

        try {
            const data = { date }

        } catch (error) {
            // setMessage()
            // setLoad()
        }
    }
    return (

        <form className='row d-flex justify-content-end align-items-end'>
            <div className="col-md-3 mb-3">
                <div className="form-floating">
                    <input onChange={(e) => setDate(e.target.value)} type="date" className="form-control rounded-3" placeholder="Saisir une date" required />
                    <label htmlFor="f">Trouvez par date</label>
                </div>
            </div>
        </form>

    )
}

export default TransacForm