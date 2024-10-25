import React from 'react'
import {items} from './Data'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div className='product-container'>
    {
    items.map((product)=>{
       return(
        <>
         <div className="product-card">
          <div className="product">
            <Link
             to={`/About/${product.id}`}
             style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
             }}
            >
          <img src={product.imgSrc} alt="img"/>
          </Link>
           <div className="info">
               <h5 className="card-title">{product.title}</h5>
               <p className='card-body'>{product.description}</p>
         </div>
                <button className='btn'>Add to cart</button>
         </div>
         </div>
        </>
       ) 
    })
    }
    </div>
    </>
  )
}

export default Product