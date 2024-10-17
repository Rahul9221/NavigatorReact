import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='py-5'>
                <Link
                    className="bg-slate-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 flex items-center gap-2" 
                    to = "/CharteredForm"
                >
                    Add Record
                </Link>
            </div>
        </div>
    )
}

export default Home
