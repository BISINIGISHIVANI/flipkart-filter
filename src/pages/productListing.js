import React from 'react'
import { Navabar } from '../components/navabar'
import productsData from "../db/productData.json"
export const ProductListingPage = () => {
  return (
    <div>
        <Navabar/>
        <main className="border-sm main-container mg-sm bg-gray padding-conteiner"  >
            <p className="mg-sm padding-sm text-center">Clothing and Accessories</p>
            <hr/>
            <span className='border-bottom-sm'></span>
            {/* product card*/}
            <div className={`product-container2 pointer bg-gray`}style={{paddingLeft:"4rem",padding:"1rem 4rem"}}>
                {productsData.length>0 ?productsData.map(({id,name,price,idealFor,brand,size,image})=>
                <div key={id} class="product-card border-sm">
                <img src={image}alt={name} class="image "/>
                <div class=" product-content padding-left">
                    <p class="color-gray">{brand}</p>
                    <p  class="padding-sm">{name}</p> 
                    <p><small>₹ {price} </small><span class="color-gray strike-para"><s>₹ 2000</s></span><span class="color-green"> 10%off</span></p>
                    <h5 className="mg-sm">Sizes : 
                       <span>{size.toString()}</span>
                    </h5>
                    <p>{idealFor.toString()}</p>
                    <div className='text-center'>
                    <button className='pointer padding-sm primary-color'style={{padding:"0.3rem 1rem"}}>
                        <i className="fa fa-shopping-cart"style={{padding:"0 0.5rem"}}></i>
                        ADD TO CART </button>
                    </div>
                </div>
            </div>):
             <h2 className="row flex-center align-center mg-sm-up full-width" style={{width:"70vw"}}>No product found based on your filters</h2>
                }
            </div>
        </main>
    </div>
  )
}
