import React from 'react'
import './alert-style.scss'
export const Alert = ({content,icon,color}) => {
  return (
    <div className='alert-body'>
      <div className="alert-content">
        <p className={`increment text-${color}`}><i className={icon}></i>  {content}</p>
      </div>
    </div>
  )
}
