import React from 'react'
import { MdDelete } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"

function DetailsBudget() {
    return (
        <div className='table-responsive'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Emoji</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Fond alloué</th>
                        <th scope="col">Dépenses</th>
                        <th scope="col">date</th>
                        <th scope="col">Reste</th>
                        <th scope="col">Modifier</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">⚽</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>200 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">🏀</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>200 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">🥎</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>500 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">🎮</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>1000 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">🎖️</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>100 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">💊</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>50 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">🔎</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>800 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">📚</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>600 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">🍎</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>300 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                    <tr>
                        <th scope="row">🍆</th>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>500 FCFA</td>
                        <td>10/02/2024</td>
                        <td>0 FCFA</td>
                        <td className="text-center"><AiFillEdit /></td>
                        <td className="text-center"><MdDelete /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsBudget