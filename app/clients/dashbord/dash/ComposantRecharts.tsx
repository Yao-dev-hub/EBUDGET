import React from 'react'
import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'

function ComposantRecharts() {
    const data = [
        { name: "January", users: 400 },
        { name: "February", users: 300 },
        { name: "March", users: 200 },
        { name: "April", users: 278 },
        { name: "May", users: 189 },
        { name: "June", users: 239 },
        { name: "July", users: 349 },
    ]



    return (
        <div className='container'>
            <div className="col-md-12"></div>
        </div>
    )
}

export default ComposantRecharts