import React from 'react'

export const Navabar = () => {
  return (
    <div>
        <nav className="nav row align-center sticky row-gap mg-auto color-white">
        <div className="mg-left-sm pointer">
            <h3><i>Flipkart</i></h3>
            <p className="font-sm"><i>Explore </i><small className="logo-subtitle"><i>Plus ✧</i></small></p>
        </div>
        <div className="search">
            <input type="search"/>
            <i className="fa fa-search pointer"></i>
        </div>
        <div className="mg-right-sm pointer">
            <button className="pointer button-login primary-color">Login</button>
        </div>
        <h4 className="pointer">Become a Seller</h4>
        <h4 className="pointer">More</h4>
        <div className="mg-right-sm row gap pointer">
            <i className="fa fa-shopping-cart fa-1.5x pointer"></i>
            <h4 className="pointer">Cart</h4>
        </div>
    </nav>
    <div className="sub-nav row align-center pointer row-gap-lg">
        <p>Electronics</p>
        <p>TV & Appliances</p>
        <p>Men</p>
        <p>Women</p>
        <p>Home & Furniture</p>
        <p>Sports & Books</p>
        <p>Flights</p>
        <p>Offer Zone</p>
    </div>
    </div>
  )
}
