import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Character(){

    const [datos, setData]=useState([]);
    const [id, setId]=useState([]);
    const [name, setname]=useState([]);
    const [url, setUrl]=useState([]);
    
    useEffect(()=>{
        const url=`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9`; 
        async function getData(){
          const data = await fetch(url) 
            .then((data) => data.json()) 
            .catch((error) => console.error(error))
          setData(data) 
          //await axios.post('http://127.0.0.1:5000/character/add', data);   
        }
     
       getData();
       
       }, []);

    //POST PARA ENVIAR DIRECTAMENTE DESDE LA API
    /*useEffect(() => {
        const postData = async () => {
          // Obtener los datos que deseas enviar a MongoDB utilizando axios
          await axios.post('http://127.0.0.1:5000/character/add', "caca");
        };
    
        postData();
      }, []);*/

     

  

  

    return(
        <div className="container">
        
        {datos.map((item) =>(
           <div class="col-3">
           <div class="card">
               <img
                 src={item.image}className="card-img-top"
               />
               <div className="card-body">
                 <h3 className="card-title">{item.name}</h3>
               </div>
           </div>
         </div>
    
          ))};
       </div>    
    )



}

export default Character;