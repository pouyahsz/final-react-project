import React, { useState } from 'react';
import Helmet from 'react-helmet';
import './pagination-style.scss';

export const Pagination = ({skip,limit,total,pageNumber,setPageNumber,skipHandler}) => {
  let buttonList = [];
    for(let i=0;i< total/limit;i++){
      buttonList.push(i);
    }
    const [pageCounts,setPageCounts] = useState(buttonList);

    function previousPage(){
      skipHandler(skip-10);
      setPageNumber(pageNumber - 1);
    }
    function nextPage(){
      skipHandler(skip+10);
      setPageNumber(pageNumber + 1);
    }
    function lastPage(){
      skipHandler(total-limit);
      setPageNumber((total/limit)-1 );
    }
    function firstPage(){
      skipHandler(0);
      setPageNumber(0);
    }
    function specificPage(e){
      skipHandler(e*10);
      setPageNumber(e)
    }
  return (
    <div className="pagination">
      <Helmet>
      <title>Best Buy: Shop Online For Deals &amp; Save | Best Buy Canada</title>
      </Helmet>

      <button className={pageNumber===0?"text-muted btn rounded-0":"btn rounded-0"} onClick={firstPage}><i className="fa-solid fa-angles-left"></i></button>
      <button className={pageNumber===0?"text-muted btn rounded-0":"btn rounded-0"} onClick={previousPage}><i className="fa-solid fa-chevron-left"></i></button>
      {pageCounts.map((element,id)=>(
        <button className={pageNumber===element?"text-muted btn rounded-0":"btn rounded-0"} onClick={()=>{specificPage(element)}} key={id}>{element}</button>
      ))}
      <button className={pageNumber===(total/limit)-1?"text-muted btn rounded-0":"btn rounded-0"} onClick={nextPage}><i className="fa-solid fa-angle-right"></i></button>
      <button className={pageNumber===(total/limit)-1?"text-muted btn rounded-0":"btn rounded-0"} onClick={lastPage}><i className="fa-solid fa-angles-right"></i></button>
    </div>
  )
}
