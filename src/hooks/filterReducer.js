import { initialState } from "./filterContext"

export const FilterReducer=(state,action)=>{
    switch(action.type){
        case "SORT_BY_PRICE":
            return {
                ...state,
                sortByPrice:action.payload
            }
        case "CLEAR_SORT":
            return {
                ...state,
                sortByPrice:""
            }
        case "IDEAL_FOR_MEN":
            return {
                ...state,
                idealForMen:!action.payload
            }
        case "IDEAL_FOR_WOMEN":
            return {
                ...state,
                idealForWomen:!action.payload
            }
        case "IDEAL_FOR_MEN_WOMEN":
            return {
                ...state,
                idealForBoth:!action.payload
            }
        case "CLEAR_GENDER":
            return {
                ...state,
                idealForMen:false,
                idealForWomen:false,
                idealForBoth:false
            }
        case "PRICE_RANGE":
            return {
                ...state,
                maxPrice:action.payload
            }
        case "BRAND_PEACE":
            return {
                ...state,
                brandPeace:!action.payload
            }
        case "BRAND_SMILING":
            return {
                ...state,
                brandSmiling:!action.payload
            }
        case "BRAND_KIND":
                return {
                    ...state,
                    brandKind:!action.payload
                }
        case "SIZE_MEDIUM":
            return {
                ...state,
                sizeMedium:!action.payload
            }
        case "SIZE_LARGE":
            return {
                ...state,
                sizeLarge:!action.payload
            }
        case "SIZE_SMALL":
            return {
                ...state,
                sizeSmall:!action.payload
            }
        case "SIZE_XLARGE":
            return {
                ...state,
                sizeXLarge:!action.payload
            }
        case "CLEAR_ALL":
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}