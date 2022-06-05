import { faImages } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  increment,decrement } from '../redux/counterSlice';
import './more-info-style.scss';

export const MoreInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const [product,setProduct] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response)=>{
            setProduct(response.data);
        })
    },[id])
    return (
        <div className='row products-item'>          
            <div className="product-image col-12 col-md-6">
                <img src={product.images?product.images[0]:null} alt={product.title} />
            </div>
            <div className="product-context col-12 col-md-6">
                <div className="title">
                    <h2>{product.title}</h2>
                </div>
                <div className="description">
                    <p>{product.description}</p>
                </div>
                <div className="prices">
                    <div className="real-price">
                        <p>{product.price} $</p>
                    </div>
                    <div className="price-with-discounter">
                        <p>{product.discountPercentage} $</p>
                    </div>
                </div>
                <div className="button">
                    <button className="add-to-basket-btn btn add-btn mb-2" onClick={
                        ()=> dispatch(increment(product))
                    }>add to basket</button>
                    <button className=" btn btn-danger" onClick={()=>{
                        navigate(-1);
                    }}>back</button>
                </div>
            </div>
        </div>
    )
}
