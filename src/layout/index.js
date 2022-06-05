import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from './alerts/alert'
import { Footer } from './footer'
import { Header } from './header'

export const Layout = ({ children }) => {
  const status = useSelector((state)=>state.alertStatus.status)
  return (
    <>
    {status?<Alert content="the product sucsessfully added" icon="fa-solid fa-circle-check" color="success"/>:null}
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}
