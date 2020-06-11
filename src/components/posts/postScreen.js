import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Post from './post';
import NavBar from '../Navbar/navbar';
import APIURL from '../../helpers/enviornment';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, 
  ModalHeader, ModalBody, ModalFooter, Modal, Input
} from 'reactstrap';
import '../../index.css';
import '../../components/posts/post.css'
import Posted from './posted.js'

const PostScreen = (props) => {
    const [posts, setPosts] = useState([])
    const url = `${APIURL}/post`
    const [activePost, setActivePost] = useState(0)
    const [question , setQuestion] = useState('')
    const toggleModal = (AP, AD, AQ) => {
      setQuestion(AQ);
      setEditText(AD);
      setActivePost(AP);
    }
    const [editText, setEditText] = useState('')
    function getData() {
      fetch(url).then(res => res.json()).then(data => {setPosts (data); console.log(data)})
      // const response = await fetch ('/post');
      // const data = await response.json();
      // console.log (data);
    };

const editPost = () => {
  fetch(url+'/'+ activePost.toString(), {
    method: "PUT",
    headers: {
      Authorization: props.token, "Content-Type": "application/json"
    },
    body: {
      question,
      discription: editText
    }
  }).then(res => res.json()).then(data => {console.log(data)})
};

const deletePost = () => {
  fetch(url).then(res => res.json()).then(data => {deletePost (data); console.log(data)}) 
};



    React.useEffect(() => getData(), [] )
    return(
      <div className="app">
        {/* <div className="navbar">
        <NavBar/>
        </div> */}
  <div className="postScreenBody">
    <Post token={props.token}/>
    {posts.map((post, index) =>{
      

      return(
      
        <Posted post={post} toggle={toggleModal} editPost={editPost} editText={editText} setEditText={setEditText} index={index} />

      );
    })}
    </div>
    </div>
    )};
// NavbarToggler.propTypes = {
//     type: PropTypes.string,
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
//   };
  

export default PostScreen;