import React from 'react'

const Category = () => {
    return (
        <div>
        <label htmlFor="category" className='block mb-2 font-normal text-sm text-slate-700'>Category</label>
            <select name="category" id="category" className='text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent'>
                <option value="food">Food</option>
                <option value="food">Transportation</option>
                <option value="food">Health and Wellness</option>
                <option value="food">Communication</option>
                <option value="food">Housing</option>
                <option value="food">Dinning Out</option>
                <option value="food">Travel & Vacation</option>
                <option value="food">Shops</option>
                <option value="food">Personal care</option>
                <option value="food">Subscriptions</option>
                <option value="food">Donations</option>
                <option value="food">Business</option>
                <option value="food">Personal Care</option>
                <option value="food">Education</option>
                <option value="food">Entertainment</option>
                <option value="food">Debt Payments</option>
                <option value="food">Pets</option>
                <option value="food">Others</option>
            </select>
            </div>
        )
}

export default Category