import React,{createContext, useReducer} from 'react'
import { dataReducer, initialData } from './dataReducer'
import axios  from 'axios'

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    const [data, dataDispatch] = useReducer(dataReducer, initialData)

    const handleQuerySubmit = async (query) => {
        console.log('clicked')
        dataDispatch({type : "SET_LOADING", payload : true});
        dataDispatch({type : "SET_ERROR", payload : ""}) 
        try {
        const res = await axios.post("http://127.0.0.1:8000/api/analyze/", { query });
        console.log("res ", res)
        if(res.data.error){
            dataDispatch({type : "SET_ERROR", payload : res.data.error}) 
        }else{
            dataDispatch({type : "SET_DATA",payload : res.data})
        }
        } catch (err) {
        console.error("API error:", err);
        dataDispatch({type : "SET_ERROR", payload : "Something went wrong. Please try again later."})
        }
        dataDispatch({type : "SET_LOADING", payload : false})
    };
  return (
    <DataContext.Provider value={{data, dataDispatch, handleQuerySubmit}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider