import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';


const ProductDetail = () => {
  const {id}=useParams();
  const [product,setProduct]=useState({});
  useEffect(() => {
    const filterProduct = items.filter((item)=>item.id==id);
    setProduct(filterProduct[0]); 
   }, [id]);
  
  return (
    <>
          <div className="productcontent">
                <div className="productinner">
                           <div className="img">
                                    <img src={product.imgSrc}alt/>
                           </div>
                           <div className="productinfo">
                            <div className="producttitle">{product.title}</div>
                            <div className="producttitle">{product.description}</div>
                            <div className="producttitle">{product.title}</div>
                            <div className="producttitle">{product.title}</div>
                            <div className="producttitle">{product.title}</div>
                            <button className='btn'>Add to cart</button>
                           </div>

                </div>
          </div>
    </>
  )
}

export default ProductDetail