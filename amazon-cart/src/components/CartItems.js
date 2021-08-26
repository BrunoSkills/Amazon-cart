import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'

function CartItems({ items, setCartItems }) {

    const changeItemQuantity = (e,index) => {
      //When we select a quantity on item, we pass it in here
      //Pass in the index
      // Using the index we need to change the quantity to the selected one from selected option
      //Update the items state
      //DO NOT UPDATE THE STATE WITHOUT setter function
      const newItems = [...items]
      newItems[index].quantity = e.target.value;
      setCartItems(newItems)
    
    }

    const deleteItem = (indexToDelete) => {
    //Filter out the items where the item index does not equal to the selected item index
    const newItems = items.filter((value, index)=>{
      return index !== indexToDelete
    })
    setCartItems(newItems);
    console.log(newItems);
    }
    return (
        <div className="CartItems">
            <h1> Shopping Cart</h1>
            <hr className="hr"></hr>
            <div className="CartItems-Item">
              {items.map((item, index) => 
              <CartItem 
              index={index}
                item={ item }
                key={index}
                changeItemQuantity={changeItemQuantity}
                deleteItem={deleteItem}
              /> 
              )}
            </div>
        </div>
    )
}

export default CartItems