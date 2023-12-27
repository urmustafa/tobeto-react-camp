import React, { useEffect, useState } from 'react'
import AddComponent from '../../components/AddComponent/AddComponent'
import axios from 'axios';

export default function ProductAdd() {
    const [addItem , setAddItem]=useState([]);

    useEffect(()=>{
        addProduct();
    },[]);

    const addProduct= async()=>{
        try {
            const response = await axios.post("https://dummyjson.com/products/add", {
            title: 'mercedes e450',
            desription: 'benz series 2024',
            brand:'mercedes',
            price:'609999'

          });
          setAddItem([...addItem, response.data]);
        } catch (error) {
          console.error('kayıt bşarısız', error);
        }
    
    }

  return (
    <div>
      <AddComponent></AddComponent>
    </div>
  )
}
