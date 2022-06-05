import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
import { changeState, changeStatusWithInterval } from '../redux/decrementAlertSlice'
import './basket-style.scss';
export const CartBasket = ({ element }) => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.counter.basketItems.products);
    const flag = useSelector((state) => state.alertDecrement.flag);
    const [productCount, setProductCount] = useState(0);
    useEffect(() => {
        for (let item of store) {
            if (item.product.id === element.product.id) {
                setProductCount(item.count)
            }
        }
    }, [store])
    return (

        <div className="product col-12 col-sm-6 col-lg-4" key={element.product.id}>
            <div className="img">
                <img src={element.product.images[0]} alt={element.product.title} />
            </div>

            <div className="context">
                <div className="title">
                    <h3>{element.product.id} - {element.product.title}</h3>
                </div>
                <div className="description">
                    <p>{element.product.description}</p>
                </div>
            </div>
            <div className="prices">
                <div className="real-price">
                    <p>{element.product.price} $</p>
                </div>
                <div className="price-with-discounter">
                    <p>{element.product.discountPercentage} $</p>
                </div>
            </div>
            <div className="count">
                count :
                <button className='btn' onClick={() => {
                    dispatch(decrement(element));
                    setProductCount(productCount - 1);
                }}><i className="fa-solid fa-minus"></i></button>
                <span>{productCount}</span>
                <button className='btn' onClick={() => {
                    dispatch(increment(element.product));
                    setProductCount(productCount + 1);
                }}><i className="fa-solid fa-plus"></i></button>
            </div>
            <div className="buttons">
                <button className="add-to-basket-btn btn" onClick={
                    () => {
                        dispatch(changeState());
                        setTimeout(()=>{
                            dispatch(changeStatusWithInterval())
                        },2000)
                        dispatch(decrement(element));
                        setProductCount(productCount - 1);

                    }
                }>remove from basket</button>
            </div>
        </div>
    )
}
