import React from 'react'

export default function Card({image,name,price,rating,votes,starImage,popular,available}) {
    const display1 = {
        display: popular ? 'block' : 'none',
        marginTop: '-30px',
    };
    const display2={
        display: available? 'none': 'block',
    }
  return (
    <div className='card'>
        <div className='popular' style={display1}>
            <p>Popular</p>
        </div>  
        <img src={image} alt="" />
        <div className='details'>
            <p>{name}</p>
            <div className='price'>
                <p>{price}</p>
            </div>
        </div>
        <div className='votes'>
            <div>
                <img src={starImage} alt="" />
                <p>{rating==null? "" :  parseFloat(rating).toFixed(1)}</p>
                <div>
                    <p>{votes==0? 'No ratings' : `(${votes} votes)`}</p>
                </div>
            </div>
            <div style={display2}>
                <p>Sold Out</p>
            </div>
        </div>
    </div>
  )
}
