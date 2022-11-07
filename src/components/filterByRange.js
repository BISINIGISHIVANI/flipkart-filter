export const FilterByPriceRange=({maxPrice,filterDispatch})=>{
    return <div className="mg-sm-up">
    <div className="row flex-center filter-category">
        <p >PRICE</p>
       <span>CLEAR</span>
    </div>
    <div className="column gap">
        <input type="range"
          max="10000"
          min="100"
          value={maxPrice}
          onChange={(e)=>{
              filterDispatch({
                  type:"PRICE_RANGE",
                  payload:e.target.value
              })
          }}
        />
    <label>Min-Max ₹ 0 - ₹{maxPrice} </label>
    </div>
</div>

}
