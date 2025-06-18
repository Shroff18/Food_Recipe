
import MainPage from './Component/MainPage';
import { Routes ,Route} from "react-router"
import MealInfo from './Component/MealInfo';
import { useContext } from 'react';
import { Context } from './Component/Context';

function App() {
  const {data} = useContext(Context)
  return (
   <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path=':mealid' element={<MealInfo/>}/>
    </Routes>
   </>
  );
}

export default App;
