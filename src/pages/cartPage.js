import React from 'react'
import { scarf } from '../assets'
import { Navabar } from '../components/navabar'
import "./cart.css"
const product=[
    {
        id:2,
        name:"23",
        price:2033,
        idealFor:[2,3],
        image:scarf,
        brand:"Breil By Fort Collins",
        size:"s"
    }
]
export const CartPage = () => {
  return (
    <div>
        <Navabar/>
        <div className="row gap bg-gray">
        <main className="border-sm main-container mg-sm" style={{width:"70vw"}}>
            <p className="mg-sm padding-sm text-center">Flipkart (2)</p>
            <span className='border-bottom-sm padding-sm'></span>
            <div className="cart-container">
                {product.map(({id,name,price,brand,size,image})=>
                <div key={id} class="cart-card border-sm">
                    <div className='row flex-center'>
                        <div>
                        <img src={image} alt={name} className="cart-image "/>
                        <div className='row align-center gap column-gap'>
                        <button>+</button>
                        <button>3</button>
                        <button>-</button>
                        </div>
                       
                        </div>
                        <div class="product-content padding-left">
                        <p class="color-gray">{brand} {name}</p> 
                        <p>Size: {size.toString()}</p>
                        <p><span class="color-gray strike-para"><s>₹ 2000</s></span><small>₹ {price} </small><span class="color-green"> 60%off</span></p>
                        <button>Save for Later</button>
                    <button>Remove</button>
                    </div>
                    </div>
            </div>)}
            </div>
        </main>
        <aside className="container mg-sm border-sm column pointer">
        <div className="row flex-center padding-sm">
           <p>PRICE DETAILS</p>
        </div>
        <span className="border-bottom-sm"></span>
        <div className="row flex-center padding-sm">
           <p>Price <span>(1) item</span></p>
           <p>₹5,918</p>
        </div>  
        <div className="row flex-center padding-sm">
           <p>Discount</p>
           <p>₹100</p>
        </div> 
        <div className="row flex-center padding-sm">
           <p>Delivery Charges</p>
           <p>₹10</p>
        </div> 
        <span className="border-bottom-sm"></span>
        <div className="row flex-center padding-sm">
           <h3>Total Amount</h3>
           <p>₹1000</p>
        </div>
        </aside>
    </div>
    </div>
  )
}
