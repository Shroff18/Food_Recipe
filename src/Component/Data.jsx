
import { useContext } from "react";
import { Context } from "./Context";
import { useParams } from "react-router-dom";

export const useFetchData = () => {
    const { search, data, setData, setDetails,details} = useContext(Context);
    //use for direct link with button 
    const {mealid} = useParams();

    //All data
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await response.json();
            setData(jsonData.meals);
            console.log(data);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    // return { fetchData };

    //All instructions
    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const jsonData = await response.json();
            setDetails(jsonData.meals[0]);
            console.log(details);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    return { fetchDetails , fetchData };
};
