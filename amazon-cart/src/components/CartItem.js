import React from 'react'
import  './CartItem.css'

function CartItem({ item, changeItemQuantity, index, deleteItem }) {
    return (
        <div className="CartItem">
             <div className="CartItem-Image">
                  <img src={process.env.PUBLIC_URL + '/items/' + item.image} alt="Apple Iphone" className=""></img>
             </div>
             <div className="CartItem-Info">
                   <div className="Info-title" >{ item.title }</div>
                   <div className="Info-stock">{ item.stock }</div> 
                   <div className="Item-actions" >
                      <div className="Item-Quantity">
                          <select 
                          onChange={(e)=>changeItemQuantity(e,index)}  name="select" className="Quantity" value={ item.quantity }>
                             <option value="1">Qty: 1</option>
                             <option value="2">Qty: 2</option>    
                             <option value="3">Qty: 3</option>    
                             <option value="4">Qty: 4</option> 
                             <option value="5">Qty: 5</option>
                             <option value="6">Qty: 6</option>    


                          </select>
                      </div> 
                      <div className="Item-actions-divider">|</div>
                      <div className="Item-delete" onClick={deleteItem.bind(this,index)}>Delete</div>
                   </div>
             </div>
             <div className="CartItem-Price">${ item.price }</div>
        </div>
    )
}

export default CartItem