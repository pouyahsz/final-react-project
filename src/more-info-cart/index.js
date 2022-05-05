import React from 'react'
import { Link } from 'react-router-dom'
import { increment } from '../redux/counterSlice'

export const ProductInfo = ({product}) => {
  return (
    
        <div className="product col-12 col-sm-6 col-lg-4" key={product.id}>
                        <div className="img">
                            <img src={product.images[0]} alt={product.title} />
                        </div>

                        <div className="context">
                            <div className="title">
                                <h3>{product.id} - {product.title}</h3>
                            </div>
                            <div className="description">
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="real-price">
                                <p>{product.price} $</p>
                            </div>
                            <div className="price-with-discounter">
                                <p>{product.discountPercentage} $</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link to={`/product/${product.id}`} className="more-info-btn btn mb-2">More info</Link>
                            <button className="add-to-basket-btn btn" onClick={
                                ()=> dispatchEvent(increment(product))
                                
                            }>add to basket</button>
                        </div>
                    </div>
  )
}
