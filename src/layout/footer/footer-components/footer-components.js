import React from 'react'
const FooterIcon = ({children,caption}) => {
  return (
    <a href="/profile/ss/orderlookup" className='icon'>
        {children}
        <p>{caption}</p>
    </a>
  )
}
const FooterListColumn = ({dataList,title})=>{
  return(
    <ul className='col-12 col-sm-12 col-md-6 col-lg-4'>
    <li className='list-title'>{title}</li>
    {dataList.map((element,id)=>{
      return(
        <li key={id}><a href={element[1]}>{element[0]}</a></li>
      )
    })}


  </ul>
  )
}


export{FooterIcon,FooterListColumn}
