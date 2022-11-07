import { useFilter } from "../hooks/filterContext"
import { FilterByBrand } from "./filterByBrand";
import { FilterByCategory } from "./filterByCategory";
import { FilterByPriceRange } from "./filterByRange";
import { FilterBySize } from "./filterBySize";

const ProductFilterBar=()=>{
    const {filterState,filterDispatch}=useFilter();
    const {idealForMen,idealForWomen,idealForBoth,brandSmiling,brandPeace,brandKind,maxPrice,
        sizeSmall,sizeMedium,sizeLarge,sizeXLarge
    }=filterState;
    return <aside className="container mg-sm border-sm column pointer">
    <div className="row flex-center padding-sm">
        <p>Filters</p>
       <span className="primary-color pointer"
       onClick={()=>filterDispatch({type:"CLEAR_ALL"})}
       ><small>CLEAR ALL</small></span>
    </div>
    <span className="border-bottom-sm"></span>
    {/* price-range */}
    <FilterByPriceRange maxPrice={maxPrice} filterDispatch={filterDispatch}/>
    <span className="border-bottom-sm"></span>
    {/* category */}
    <FilterByCategory idealForMen={idealForMen} idealForWomen={idealForWomen} idealForBoth={idealForBoth} filterDispatch={filterDispatch}/>
    <span className="border-bottom-sm"></span>
    {/* sizes */}
    <FilterBySize sizeLarge={sizeLarge} sizeMedium={sizeMedium} sizeSmall={sizeSmall} sizeXLarge={sizeXLarge} filterDispatch={filterDispatch}/>
    <span className="border-bottom-sm"></span>
    {/* brand */}
    <FilterByBrand brandKind={brandKind} brandSmiling={brandSmiling}brandPeace={brandPeace} filterDispatch={filterDispatch}/>
</aside>
}
export {ProductFilterBar}

