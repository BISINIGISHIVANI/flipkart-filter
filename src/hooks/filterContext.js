import {createContext,useContext,useReducer}from "react";
import { FilterReducer } from "./filterReducer";
const initialState={
    sortByPrice:"",
    idealForMen:false,
    idealForWomen:false,
    idealForBoth:false,
    brandSmiling:false,
    brandPeace:false,
    brandKind:false,
    sizeSmall:false,
    sizeMedium:false,
    sizeLarge:false,
    sizeXLarge:false,
    maxPrice:10000
}
const FilterContext=createContext(initialState);
const FilterProvider=({children})=>{
    const [filterState,filterDispatch]=useReducer(FilterReducer,initialState)
    return <FilterContext.Provider value={{filterState,filterDispatch}}>
        {children}
    </FilterContext.Provider>
}
const useFilter=()=>useContext(FilterContext)
export {useFilter,FilterProvider,initialState}