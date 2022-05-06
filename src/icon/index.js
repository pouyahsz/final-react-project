import React from 'react'
import './icon-style.scss'
export const Icon = ({className,textContext,badgeContent}) => {
  return (
    <button className='button'>
        <i className={className}>{typeof badgeContent ==="object"?<span className='basket-badge'>{badgeContent.basketItems.total}</span>:null}</i>
        {textContext}
    </button>
  )
}
