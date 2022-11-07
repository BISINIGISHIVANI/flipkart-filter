
const FilterByBrand=({filterDispatch,brandSmiling,brandPeace})=>{
    // const brandData=["smile","longer","peace"]
    // const [brands,setBrand]=useState(brandData);
    // const searchBrandHandler=(value)=>{
    //     let data=brandData.filter((brand)=>brand.toLowerCase().includes(value))
    //     setBrand(data)
    // }
    return <div className="column gap">
    <p className="mg-sm-up">Brand</p>
    <label>
    <input type="checkbox"
     checked={brandSmiling}
     onChange={(e)=>e.target.checked?filterDispatch({
         type:"BRAND_SMILING",
         payload:false
     }):filterDispatch({
         type:"BRAND_SMILING",
         payload:true
     })}
    />
    Smile
  </label>
  <label>
    <input type="checkbox"
    checked={brandPeace}
    onChange={(e)=>e.target.checked?filterDispatch({
        type:"BRAND_PEACE",
        payload:false
    }):filterDispatch({
        type:"BRAND_PEACE",
        payload:true
    })}
    />
    Peace
  </label>
  
</div>
}
export {FilterByBrand}
