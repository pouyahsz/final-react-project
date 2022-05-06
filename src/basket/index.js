import React from 'react';
import { useSelector } from 'react-redux';
import { CartBasket } from './cart-basket';

export const MyBasket = () => {
    const store = useSelector((state)=>state.counter.basketItems);
    console.log(store)
  return (
    <div className='row gy-5 gx-4'>
        {store.products.map((element)=>(
            <CartBasket element={element}/>
        )
        )}
    </div>
  )
}
