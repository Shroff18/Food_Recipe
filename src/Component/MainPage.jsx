import React, { useContext } from 'react'
import { Context } from './Context'
import { useFetchData } from "./Data";
import MealCard from './MealCard';

const MainPage = () => {

  const { setSearch } = useContext(Context);
  const { fetchData } = useFetchData();


  const handle = (e) => {
    setSearch(e.target.value)
  }


  return (
    <>
      <div className="container">
        <div className="search">
          <input type="text" placeholder='Enter a dish' onChange={handle} />
          <button className='srcbtn' onClick={fetchData} >Search</button>
        </div>
        <div className="allCards">
          <MealCard />
        </div>
      </div>
    </>
  )
}

export default MainPage
