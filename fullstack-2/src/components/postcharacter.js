import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostCharacter(){

    const [data, setData]=useState([]);
    const [id, setId]=useState([]);
    const [name, setname]=useState([]);
    const [url, setUrl]=useState([]);
    
    /*useEffect(()=>{
        const url=`http://127.0.0.1:5000/character`; 
        async function getData(){
          const data = await fetch(url) 
            .then((data) => data.json()) 
            .catch((error) => console.error(error))
          setData(data) 
          //await axios.post('http://127.0.0.1:5000/character/add', data);   
        }
     
       getData();
       
       }, []);*/

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/character')
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

   

    const handleSubmit= async (event)=>{
      event.preventDefault();
      const newcharacter={
        id:id,
        name:name,
        url:url
      }
      axios.post('http://127.0.0.1:5000/postcharacter/addnew', newcharacter)
      .then((response) => {
        console.log("entre;")
        
      })
    };

  

    return(
        <div className="container">
        <form onSubmit={handleSubmit} className="comment-form"> 
          <input type="text" id="user" placeholder="Id"  value={id} onChange={(e) => setId(e.target.value)}/>
          <input type="text" id="name" placeholder="name"  value={name} onChange={(e) => setname(e.target.value)}/>  
          <input type="text" id="user" placeholder="img"  value={url} onChange={(e) => setUrl(e.target.value)}/>
            
          <button type="submit">Submit</button>
        </form>
        {data.map((item) =>(

           <div key={item._id} className="col-3">
           <div class="card">
               <img
                 src={item.url}className="card-img-top"
               />
               <div className="card-body">
                 <h3 className="card-title">{item.name}</h3>
                 
               </div>
           </div>
         </div>
    
          ))}
       </div>    
    )



}

export default PostCharacter;