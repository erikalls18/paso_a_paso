import React, { useState, useEffect } from "react";
import '../Comments.css';
import axios from 'axios';
import {Button, Modal,  ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

function Comments(props) {
  const id = props.id;
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [commentSaved, setCommmentSaved] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const errorMessage=handleInput(user, comment)
  const [showModal, setShowModal] = useState(false);
  
  function handleInput(user, comment){
 
  
    if(!user && !comment){
      return "Please enter the following information: name and comment";
    } 
    if (!user && comment !== ""){
    return " Please enter the following information: name";
    }
    if (user !== "" && !comment){
    return " Please enter the following information: comment";
    }  
  }
  
  const  handleSubmit=  async (event)=>{
    event.preventDefault();
    setShowForm(false); 
    handleInput(user, comment);
    const data={
      shelterId:id,
      user:user,
      comment:comment,
      
    }
    axios
    .post('/api/comments', data)
    .then(res=>{
    setComment("")
    setUser("")
    console.log("success")
    getData();
    if (user !=="" && comment!=="") {
      setShowModal(true);
      };
    });   
  };


  const url = `/api/comments/${id}`;
  async function getData  () {
    const data = await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setCommmentSaved(data);
      })

      .catch((error) => console.error(error));
  }

  useEffect(() => {
   // getData();
  }, [commentSaved]);

  return(
  
    <div className="container-comments"> 
    <button className="button-form" onClick={() => setShowForm(true)}>Add a Comment</button>
      {showForm && (

      <form onSubmit={handleSubmit} className="comment-form">
      
        <p className="message"> <strong>{errorMessage}</strong></p> 
        <input type="text" id="user" placeholder="Name"  value={user} onChange={(e) => setUser(e.target.value)}/>
        <br/>
        <br/>
        <textarea id="comment"  placeholder="Leave us your message!" value={comment} onChange={(e) => setComment(e.target.value)} />
        <br/>
        <button className="button-form" type="submit" disabled={errorMessage}>Post Comment</button>  
      
      </form>
      
      )}
      <Modal  isOpen={showModal} onRequestClose={() => setShowModal(true)} className=".model-content">
        <ModalBody>
          <p className="message-post">Thanks for your comments!</p> 
        </ModalBody>
        <ModalFooter >
          <Button onClick={() => setShowModal(false)} className="btn-message-post">Close</Button >
        </ModalFooter>
      </Modal>    
      <div className="comment">
      {commentSaved.map((item) => (
        <div key={item._id} className="card-comment" >
          <div className="container-user">
            <img className ="avatar "src="/images/user_avatar.png"  width="50px" alt="avatar"/>
            <p className="name"> {item.user}</p>
            <p className="date">{new Date(item.createdAt).toISOString().slice(0,10)}</p>
          </div> 
          <p className="user-comment"> {item.comment}</p>
        
        </div>))}
      </div> 
    </div>


);
} 
export default Comments;
