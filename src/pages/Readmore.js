import React from 'react'
import { useState } from 'react'

export const Readmore = ({children}) => {
    const [isReadMore , setReadMore] = useState(false);

    const toogleReadMore = ()=>{
        setReadMore(prevState => !prevState)
    }
  return (
    <div className="readmore">
        <p className='inner_para'> {isReadMore ? children : children.substring(0,200)}</p>
        <button onClick={toogleReadMore}>{isReadMore ? "Read Less" : "Read More"}</button>
    </div>
       
       )
     }

