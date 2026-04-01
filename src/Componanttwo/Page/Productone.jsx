import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productitem from './Productitem';

const Productone = () => {
    const [allData, setAllData] = useState([]);
useEffect(()=>{
    async function allDatas() {
        let data = await axios.get("https://api.escuelajs.co/api/v1/products")
        setAllData(data.data)
    }
    allDatas()
},[])


  return (
    <div>{
        allData.map((product)=>(
            <Productitem key={product.id } product={product}/>
            
       ) )}
    
    </div>
  )
}

export default Productone