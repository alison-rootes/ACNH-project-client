import React, {useState} from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardColumns, Button, 
    ModalHeader, ModalBody, ModalFooter, Modal, Input
  } from 'reactstrap';


  const Posted = (props) => {
    const post = props.post
    const [modal, setModal] = useState(false)
    const toggleModal = (AP, AD, AQ) => {
        props.toggle(AP, AD, AQ)
        setModal(!modal)
    }
    return(
      <CardColumns>
        <Card key= {props.index}>
          <CardBody className="posts">
            <CardTitle className="user">{post.user}</CardTitle>
            <CardSubtitle className="question">{post.question}</CardSubtitle>
            <CardText className="discription">{post.discription}</CardText>
            <div class="card-footer">
              <small class="text-muted">{post.createdAt}</small>
            </div>
            <Button>Comment</Button>
            <Button onClick={()=>toggleModal(post.id, post.discription, post.question)}>
                Edit</Button>
            <Modal isOpen= {modal} toggle = {() =>
            {console.log(post)
                    toggleModal(post.id, post.discription, post.question)}}>

              <ModalHeader>
                <h1>{post.question}</h1>

              </ModalHeader>
              <ModalBody>
              <Input value = {props.editText} onChange = {e => props.setEditText(e.target.value)}></Input>
              <Button onClick={props.editPost}>Edit</Button>
              <Button onClick={toggleModal}>Close</Button>
              </ModalBody>
            </Modal>
          </CardBody>
        </Card>
      </CardColumns>
    )

  }

  export default Posted;