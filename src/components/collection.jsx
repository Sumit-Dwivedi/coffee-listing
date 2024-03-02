import React, { useState } from 'react'
import Card from './card'
import vector from '../assests/images/dccl--frontend-simple-coffee-listing/vector.svg'
import star from '../assests/images/dccl--frontend-simple-coffee-listing/Star.svg'
import starfill from '../assests/images/dccl--frontend-simple-coffee-listing/Star_fill.svg'
import axios from 'axios'

export default function Collection() {
    const url="https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
    const [all,setAll]=useState(true);
    const [avail,setAvail]=useState(false);
    const bgColor=['transparent','#6F757C']
    const [Data,setData]=useState([]);
    React.useEffect(()=>{
      axios.get(url)
      .then(async (response)=>setData(response.data)); 
    },[])
    const Now=()=>{
      setAvail(true);
      setAll(false);
      document.getElementById('allProducts').style.backgroundColor=`${bgColor[0]}`
      document.getElementById('available').style.backgroundColor=`${bgColor[1]}`
    }
    const everything=()=>{
      setAvail(false);
      setAll(true);
      document.getElementById('allProducts').style.backgroundColor=`${bgColor[1]}`
      document.getElementById('available').style.backgroundColor=`${bgColor[0]}`
    }
  return (
    <div className='collection'>
        <div className='vector'>
            <img src={vector} alt="" />
        </div>
        <div className='innerContent'>
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className='buttons'>
                <button onClick={everything} id="allProducts">All Products</button>
                <button onClick={Now} id="available" style={{backgroundColor: 'transparent'}}>Available Now</button>
            </div>
        </div>
        <div className='products'>
          {Data.map((Data)=>{ 
            if(all==true){
              return (
                <Card 
                id={Data.id}
                image={Data.image} 
                 name={Data.name} price={Data.price} 
                 rating={Data.rating} 
                 votes={Data.votes} 
                 starImage={Data.rating!==null ? starfill : star}
                 popular={Data.popular}
                 available={Data.available}
                 />
              );
            }else{
              return (
                Data.available && <Card 
                id={Data.id}
                image={Data.image} 
                 name={Data.name} price={Data.price} 
                 rating={Data.rating} 
                 votes={Data.votes} 
                 starImage={Data.rating!==null ? starfill : star}
                 popular={Data.popular}
                 available={Data.available}
                 />
              );
            }
          })}
        </div>
    </div>
  )
}
