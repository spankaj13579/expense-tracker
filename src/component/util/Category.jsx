import React from 'react'

const Category = ({onTyping}) => {

    const handleChange= (e)=>{
        console.log(e.target.name);
        onTyping(e)
    }
    return (
        <div>
        <label htmlFor="category" className='block mb-2 font-normal text-sm text-slate-700'>Category</label>
            <select onChange={handleChange} name="category" id="category" className='text-slate-800 text-base border-solid border-2 rounded-lg p-3 block w-full font-normal bg-transparent'>
                <option value="food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Health">Health and Wellness</option>
                <option value="Communication">Communication</option>
                <option value="Housing">Housing</option>
                <option value="Dinning">Dinning Out</option>
                <option value="Travel">Travel & Vacation</option>
                <option value="Shops">Shops</option>
                <option value="Personal">Personal care</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Donations">Donations</option>
                <option value="Business">Business</option>
                <option value="Personal">Personal Care</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Debt">Debt Payments</option>
                <option value="Pets">Pets</option>
                <option value="Others">Others</option>
            </select>
            </div>
        )
}

export default Category