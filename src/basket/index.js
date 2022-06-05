import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '../layout/alerts/alert';
import { CartBasket } from './cart-basket';

export const MyBasket = () => {
  const store = useSelector((state) => state.counter.basketItems);
  const alertStatus = useSelector((state) => state.alertDecrement.status)

  return (
    <>
      {alertStatus?<Alert content="the product was removed" icon="fa-solid fa-circle-exclamation" color="danger"/>:null}
      <div className='row gy-5 gx-4'>
        {store.products.map((element) => (
          <CartBasket element={element} />

        )
        )}
      </div>
    </>
  )
}
