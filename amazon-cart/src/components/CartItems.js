import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'

function CartItems() {
    return (
        <div className="CartItems">
            <h1> Shopping Cart</h1>
            <hr className="hr"></hr>
            <div className="CartItems-Item">
               <CartItem />
            </div>
        </div>
    )
}

export default CartItems