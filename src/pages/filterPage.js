import { ProductsData } from "../db/products";
// import productsData from "../db/products.json"
import {useState} from "react"
import { useFilter } from "../hooks/filterContext";
import { ProductFilterBar } from "../components/filterBar";
import { SortByBrandHandler, SortByCategoryHandler, SortByPriceHandler, SortByPriceRangeHandler, SortBySizeHandler } from "../helpers/filterFunction";
import { FilterByPrice } from "../components/filteByPrice";
import { Navabar } from "../components/navabar";
export const FilterPage=()=>{
    const [products]=useState(ProductsData)
    const {filterState,filterDispatch}=useFilter();
    const {sortByPrice,idealForMen,idealForWomen,idealForBoth,maxPrice,brandPeace,brandSmiling,sizeSmall,sizeMedium,sizeLarge,sizeXLarge
    }=filterState;
    const productFilterByPrice=SortByPriceHandler(products,sortByPrice);
    const productByCategory=SortByCategoryHandler(productFilterByPrice,idealForMen,idealForWomen,idealForBoth)
    const productByPriceRange=SortByPriceRangeHandler(productByCategory,maxPrice)
    const productFilterByBrand=SortByBrandHandler(productByPriceRange,brandPeace,brandSmiling)
    const productFilteBySize=SortBySizeHandler(productFilterByBrand,sizeSmall,sizeMedium,sizeLarge,sizeXLarge);
    const filterData =[...new Set(productFilteBySize)]
    return <div>
        <Navabar/>
        <div className="row gap bg-gray">
        {/* filterBar */}
        <ProductFilterBar/>
        <main className="border-sm main-container mg-sm"  style={{width:"70vw"}}>
            <p className="mg-sm padding-sm">Clothing and Accessories</p>
            {/* filter price */}
            <FilterByPrice sortByPrice={sortByPrice} filterDispatch={filterDispatch}/>
            {/* product card*/}
            <div className={`${filterData.length>3?" product-container":"row flex-wrap "} pointer`}>
                {filterData.length>0 ? filterData.map(({id,name,price,idealFor,brand,size,image})=>
                <div key={id} class="product-card border-sm">
                <img src={image}alt={name} class="image "/>
                <div class=" product-content padding-left">
                    <p class="color-gray">{brand}</p>
                    <p  class="padding-sm">{name}</p> 
                    <p><small>₹ {price} </small><span class="color-gray strike-para"><s>₹ 2000</s></span><span class="color-green"> 60%off</span></p>
                    <h5 className="mg-sm">Sizes : 
                       <span>{size.toString()}</span>
                    </h5>
                    <p>{idealFor.toString()}</p>
                </div>
            </div>):
             <h2 className="row flex-center align-center mg-sm-up full-width" style={{width:"70vw"}}>No product found based on your filters</h2>
                }
            </div>
        </main>
    </div>
    </div>
}
