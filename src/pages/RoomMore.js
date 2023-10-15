import React, {useState} from 'react'


export const RoomMore = ({children}) => {
    const [isReadMore , setReadMore] = useState(false);

    const toogleReadMore = ()=>{
        setReadMore(prevState => !prevState)
    }
  return (
    <div className="roommore">
        <p className='inner_para'> {isReadMore ? children : children.slice(0,200)}</p>
        <button onClick={toogleReadMore}>{isReadMore ? "Read Less" : "Read More"}</button>
    </div>
       
       )
     }

