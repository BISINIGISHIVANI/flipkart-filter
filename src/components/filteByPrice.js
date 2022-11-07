export const FilterByPrice=({sortByPrice,filterDispatch})=>{
    return <div className="row gap mg-sm-up border-bottom-sm">
    <label>
        <input type="radio" 
         onChange={()=>filterDispatch({
            type:"SORT_BY_PRICE",
            payload:"PRICE_HIGH_TO_LOW"
        })}
        checked={sortByPrice&&sortByPrice==="PRICE_HIGH_TO_LOW"}
        />
        Price High to low
    </label>
    <label>
        <input type="radio"
         onChange={()=>filterDispatch({
            type:"SORT_BY_PRICE",
            payload:"PRICE_LOW_TO_HIGH"
        })}
        checked={sortByPrice&&sortByPrice==="PRICE_LOW_TO_HIGH"}
        />
        Price Low to High
    </label>
</div>
}
