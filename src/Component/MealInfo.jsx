import React, { useContext, useEffect } from 'react'
import { Context } from './Context';
import { useFetchData } from './Data';
const MealInfo = () => {
    const { details } = useContext(Context);
    const { fetchDetails } = useFetchData();

    // if (details != "") {
    useEffect(()=>{
        fetchDetails();
    },[])
    // }
    return (
        <div className='meal-info'>
            <img src={details.strMealThumb} alt="" />
            <div>
                <h1>Recipe Details</h1>
                <button>{details.strMeal}</button>
                <h3>Intructions</h3>
                <p>{details.strInstructions}</p>
            </div>
        </div>

    )
}

export default MealInfo;
