import React from 'react'
import { getitems,addItem } from '../actions/itemActions'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Label,Input } from 'reactstrap';
import { useDispatch } from 'react-redux';



export default function ItemModal() {
  
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');

    const toggle = () => setModal(!modal);
 const onChangeHandler=(e)=>{
      setName(e.target.value);
  }
   const dispatch = useDispatch()

  const handleOnSubmit = (e ) => {
    e.preventDefault();

    const newItem = {
      name:name
    };

    // Add item via addItem action
   dispatch(addItem(newItem)) ;
    // Close modal
    toggle();
  };


    return (
        <div>
            


           
            <Button color="danger" onClick={toggle}>Add Item</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleOnSubmit} >
<FormGroup>
<Label for="item" > Item  </Label>
<Input type = "text" id ="item" placeholder ="Add Item"
onChange={onChangeHandler}
>
</Input>

</FormGroup>
<Button color ="dark" block>
ADD ITEM
</Button>
            </Form>
        </ModalBody>


        
      </Modal>

















        </div>
    )
}
