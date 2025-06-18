import React, { useContext } from 'react'
import { Context } from './Context'
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const MealCard = () => {
    const { data } = useContext(Context);
    return (
        <div className='cardContainer'>
            {!data ? "" :
                data.map((index) => {
                    return (
                        <div className='meal-card'>
                            <h2>{index.strMeal}</h2>
                            <img src={index.strMealThumb} alt="" />
                            <NavLink to={`${index.idMeal}`}>
                            {/* <Link to='/details'> */}
                            <button>Recipe</button>
                            {/* </Link> */}
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MealCard
