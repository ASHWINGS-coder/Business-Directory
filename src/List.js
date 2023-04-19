import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import  './List.css'

function List(item) {
    return (
        <div className='card'>
            <div>
                <div className='cat'>{item.item.Category}</div>
                <div className='name'>{item.item.Name}</div>
                <div className='loc'>{item.item.Address}</div>
            </div>
            <div className='icon'>{item.item.Rating} <span className='icons'>{<AiFillStar />}</span></div>
        </div>
    )
}

export default List