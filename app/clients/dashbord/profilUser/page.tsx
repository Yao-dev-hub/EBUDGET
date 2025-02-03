import { ParamesID } from '@/Type'
import React from 'react'
import NavigateBarUser from './NavigateBarUser'


function page({ params }: ParamesID) {

    const getParams = async () => {
        const { uid } = await params
        return uid
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <NavigateBarUser />
                </div>
            </div>
        </div>
    )
}

export default page