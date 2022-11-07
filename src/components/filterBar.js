import { useFilter } from "../hooks/filterContext"
import { FilterByBrand } from "./filterByBrand";
import { FilterByCategory } from "./filterByCategory";
import { FilterByPriceRange } from "./filterByRange";
import { FilterBySize } from "./filterBySize";

const ProductFilterBar=()=>{
    const {filterState,filterDispatch}=useFilter();
    const {idealForMen,idealForWomen,brandSmiling,brandPeace,maxPrice,
        sizeSmall,sizeMedium,sizeLarge,sizeXLarge
    }=filterState;
    return <aside className="container mg-sm border-sm column pointer">
    <div className="row flex-center padding-sm">
        <p>Filters</p>
       <span className="primary-color pointer"><small>CLEAR ALL</small></span>
    </div>
    <span className="border-bottom-sm"></span>
    {/* price-range */}
    <FilterByPriceRange maxPrice={maxPrice} filterDispatch={filterDispatch}/>
    <span className="border-bottom-sm"></span>
    {/* category */}
    <FilterByCategory idealForMen={idealForMen} idealForWomen={idealForWomen} filterDispatch={filterDispatch}/>
    <span className="border-bottom-sm"></span>
    {/* sizes */}
    <FilterBySize sizeLarge={sizeLarge} sizeMedium={sizeMedium} sizeSmall={sizeSmall} sizeXLarge={sizeXLarge} filterDispatch={filterDispatch}/>
    <span className="border-bottom-sm"></span>
    {/* brand */}
    <FilterByBrand brandSmiling={brandSmiling}brandPeace={brandPeace} filterDispatch={filterDispatch}/>
</aside>
}
export {ProductFilterBar}
//      <FilterByPrice sortByPrice={sortByPrice} filterDispatch={filterDispatch}/>
