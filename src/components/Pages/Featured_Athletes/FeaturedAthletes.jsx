import React from 'react'
import ProfileCard from './ProfileCard'
import { data } from './data'
import CardList from './CardList'
const FeaturedAthletes = () => {
    console.log(data)

    return (
        <div className='w-full px-8 md:px-14 p-6 lg:px-12'>
            <div className='flex justify-between items-center'>
                <p className='text-2xl hidden md:block'>Featured Athletes</p>
                <div className="flex items-center justify-between gap-x-4">
                    <select className="border border-gray-300 p-2 rounded-lg px-9">
                        <option value="">Select Discipline</option>
                    </select>
                    <button className="bg-blue-500 text-white px-6 pr-7 py-[10px] rounded-lg hover:bg-blue-600">
                        View
                    </button>
                </div>




            </div>
            {/* Profile Cards */}
            {
                data.map((athlete) => (
                    <CardList key={athlete.id} athlete={athlete} />
                ))
            }
        </div>
    )
}

export default FeaturedAthletes