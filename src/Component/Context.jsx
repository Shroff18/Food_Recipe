import { createContext, useState} from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {

    //search a input
    const [search, setSearch] = useState("");

    //api fecth data
    const [data,setData] = useState("");

    //fetch details
    const [details,setDetails] = useState("");

    const contextValues = {
        search,
        setSearch,
        data,
        setData,
        details,
        setDetails
    };

    return (
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
