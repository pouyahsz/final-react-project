import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Loading } from '../loading';
import { useSelector, useDispatch } from 'react-redux';
import {  increment,decrement } from '../redux/counterSlice';
import { Pagination } from '../pagination';
import './products-style.scss';

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(100);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(
                response => {
                    setProducts(response.data.products);
                    setLoadingStatus(false)

                }
            )
    }, [skip, limit])

    return (
        <div>
            {loadingStatus ? <Loading /> :
                <div className="row gy-5 gx-4">
                    {products.map((element) =>

                    (<div className="product col-12 col-sm-6 col-lg-4" key={element.id}>
                        <div className="img">
                            <img src={element.images[0]} alt={element.title} />
                        </div>

                        <div className="context">
                            <div className="title">
                                <h3>{element.id} - {element.title}</h3>
                            </div>
                            <div className="description">
                                <p>{element.description}</p>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="real-price">
                                <p>{element.price} $</p>
                            </div>
                            <div className="price-with-discounter">
                                <p>{element.discountPercentage} $</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link to={`/product/${element.id}`} className="more-info-btn btn mb-2">More info</Link>
                            <button className="add-to-basket-btn btn" onClick={
                                ()=> dispatch(increment(element))
                                
                            }>add to basket</button>
                        </div>
                    </div>
                    ))}
                </div>

            }
            <Pagination skip={skip} limit={limit} total={total} pageNumber={pageNumber} setPageNumber={setPageNumber} skipHandler={setSkip} />
        </div>
    )
}
