import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { increment } from '../redux/counterSlice'
import { changeState,changeStatusWithInterval} from '../redux/incrementAlertSlice'

export const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();

    return (

        <div className="product">
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
                    () => {
                        dispatch(increment(product));
                        dispatch(changeState());
                        setTimeout(()=>{
                            dispatch(changeStatusWithInterval())
                        },2000)

                    }

                }>add to basket</button>
            </div>
        </div>
    )
}
