import React from 'react'

export const Input = ({name,state}) => {
    function getProducts(){
        
    }
    return (
        <>
            <div className="input-box">
                <label htmlFor={name}>{name} : </label>
                <input type="checkbox" id={name} checked={state} onChange={()=>{getProducts()}}/>
            </div>
        </>
    )
}
