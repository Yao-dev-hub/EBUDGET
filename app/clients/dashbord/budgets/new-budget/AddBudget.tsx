'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GiTakeMyMoney } from "react-icons/gi"
import EmojiPicker from 'emoji-picker-react';
import { BudgetType } from '@/Type';

function AddBudget() {

    const [show, setShow] = useState(false);

    const handleCloseModal = () => {
        setTitre("")
        setFond("0")
        setEmojiSelect("")
        setShowEmoji(false)
        setShow(false)
    }
    const handleShowMoadl = () => setShow(true);

    const [titre, setTitre] = useState("")
    const [fond, setFond] = useState("")
    const [message, setMessage] = useState("")
    const [load, setLoad] = useState(false)


    const [showEmoji, setShowEmoji] = useState(false)
    const [emojiSelect, setEmojiSelect] = useState("")

    const handlerEmoji = (emojiObject: { emoji: string }) => {
        setEmojiSelect(emojiObject.emoji)
        setShowEmoji(false)
    }


    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

            setMessage("")
            setLoad(true)

            const data: BudgetType = {
                titre, fond, emoji: emojiSelect
            }
            const req = await fetch("/server/budget-routes/new-budget", {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify(data)
            })

            const res = await req.json()
            if (res && res.message === "ok") {
            } else {
                setMessage(res.message)
            }
            setLoad(false)

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <>

            <div className='mb-3'>
                <button type='button' className='btn btn-outline-dark ' onClick={handleShowMoadl}><GiTakeMyMoney className='fs-4' /> Ajoutez un budgets</button>
            </div>

            {/*Modal react-bootstrap */}
            <Modal
                centered
                show={show}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='h4'>Ajouter un budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <form className="row" onSubmit={(e) => submitForm(e)}>
                            <div className="col-md-12 mb-3">
                                <div className="form-floating">
                                    <input value={titre} onChange={(e) => setTitre(e.target.value)} type="text" className="form-control" placeholder="Saisir le titre du budget" required />
                                    <label htmlFor="f">Titre du budget</label>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-floating">
                                    <input type="number" min={1} onChange={(e) => setFond(e.target.value)} className="form-control" placeholder="Saisir le montant total à depensé" required />
                                    <label htmlFor="f">Montant total à dépensé</label>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                {!showEmoji ? (
                                    <button type='button' onClick={() => setShowEmoji(!showEmoji)} className='btn btn-outline-primary form-control'>
                                        {emojiSelect || "Selection un emoji 👍"}
                                    </button>
                                ) : (
                                    <EmojiPicker onEmojiClick={handlerEmoji} className='form-control' height={300} />
                                )}
                            </div>
                            <div className="col-md-12">
                                <button type='submit' className='btn btn-warning form-control'>Ajouter</button>
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default AddBudget