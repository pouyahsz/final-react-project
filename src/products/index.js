import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Loading } from '../loading';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import { Pagination } from '../pagination';
import './products-style.scss';
import { ProductInfo } from '../more-info-cart';
import { Input } from './input';

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [allProducts, setALLProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(100);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const store = useSelector((state) => state.filter.filter)
    const value = useSelector((state) => state.search.search);
    useEffect(() => {
        setLoadingStatus(true);
        axios
            .get(`https://dummyjson.com/products/${store}?limit=${limit}&skip=${skip}`)
            .then(
                response => {
                    setProducts(response.data.products);
                    setALLProducts(response.data.products)
                    setLoadingStatus(false)

                }
            )
    }, [skip, limit, store])
    useEffect(() => {

        let myProducts = [];
        for (let i = 0; i < allProducts.length; i++) {
            allProducts[i].title.toLowerCase();
            if (allProducts[i].title.search(value.toLowerCase()) !== -1) {
                myProducts.push(allProducts[i])

            }
        }
        setProducts(myProducts);

    }
        , [value])
    return (
        <div>
            <div className='row'>
                <div className="col-10">
                    {loadingStatus ? <Loading /> :
                        <div className="row gy-5 gx-4">
                            {products.length!==0?products.map((element, index) =>
                            (
                                <div key={index} className=' col-12 col-sm-6 col-lg-4'>
                                    <ProductInfo product={element} />
                                </div>
                            )):<div className='no-items'><p>there are no items <i class="fa-solid fa-exclamation"></i></p></div>}

                        </div>

                    }
                </div>
                <div className="col-2">
                    <div className="filter-box">
                        <div className="filter-box-title">
                            <h3>filter</h3>
                        </div>
                        <Input name="all" />
                        <Input name="smartphones" />
                        <Input name="laptops" />
                        <Input name="skincare" />
                        <Input name="groceries" />
                        <Input name="home-decoration" />
                        <Input name="furniture" />
                        <Input name="tops" />
                        <Input name="womens-dresses" />
                        <Input name="mens-shirts" />
                        <Input name="womens-shoes" />
                        <Input name="mens-shoes" />
                        <Input name="mens-watches" />
                        <Input name="womens-watches" />
                        <Input name="womens-bags" />
                        <Input name="womens-jewellery" />
                        <Input name="sunglasses" />
                        <Input name="automotive" />
                        <Input name="motorcycle" />
                        <Input name="lighting" />
                    </div>
                </div>
            </div>
            <Pagination skip={skip} limit={limit} total={total} pageNumber={pageNumber} setPageNumber={setPageNumber} skipHandler={setSkip} />
        </div>
    )
}
