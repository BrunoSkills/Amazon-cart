import React from 'react'
import  './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
             <div className="CartItem-Image">
                  <img src="https://images.unsplash.com/photo-1560699980-9dee78d1e874?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className=""></img>
             </div>
             <div className="CartItem-Info">
                   <div className="Info-title">Apple New version</div>
                   <div className="Info-stock">In Stock</div> 
                   <div className="Item-actions" >
                      <div className="Item-Quantity">
                          <select name="select" className="Quantity">
                             <option value="1">Qty: 1</option>
                             <option value="2">Qty: 2</option>    
                             <option value="3">Qty: 3</option>    
                             <option value="4">Qty: 4</option>    
                          </select>
                      </div> 
                      <div className="Item-actions-divider">|</div>
                      <div className="Item-delete">Delete</div>
                   </div>
             </div>
             <div className="CartItem-Price">$399.00</div>
        </div>
    )
}

export default CartItem