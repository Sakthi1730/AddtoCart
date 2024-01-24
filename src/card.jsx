import React, { useState } from 'react'

function Card({product,addToCart,removeFromCart}) {
  const [inCart,setInCart]=useState(false);
  const handleAdd=()=>{
    addToCart();
    setInCart(true);
  }
  const handleRemove=()=>{
    removeFromCart();
    setInCart(false);
  }
  return (
    <div className=" col-3 card h-100">
                 <div className="badge bg-dark text-white position-absolute" style={{width: '18rem'}}></div>
                 <img className="card-img-top" src={product.img} style={{width:'18rem', height:'15rem'}}alt="..." />
                 <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.Name}</h5>
                     <div className="price">{product.price}
                     
                     </div>
                     
                   <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               
                   <div className="text-center">
                    {!inCart?(<button onClick={handleAdd}>Add to cart</button>):
                    (<button onClick={handleRemove}>RemoveFromCart</button>)}
                   
                   </div>
                
              </div>
                   </div>
                    
                  </div>
                </div>
              
  )
}

export default Card