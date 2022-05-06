import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilters, removeFilters } from '../redux/filterSlice'

export const Input = ({name}) => {
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products`)
            .then(
                response => {
                    

                }
            )
    }, [])
    const dispatch = useDispatch();
    function getProducts(e){
        if(e.target.id !=='all'){
            dispatch(addFilters(e.target.id))
        }else{
            dispatch(removeFilters())

        }
    }
    return (
        <>
            <div className="input-box">
                <label htmlFor={name}>{name} : </label>
                <input type="radio" id={name} name="category" onChange={getProducts}/>
            </div>
        </>
    )
}
