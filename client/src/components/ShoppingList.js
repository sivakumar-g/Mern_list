import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition , TransitionGroup} from 'react-transition-group';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import {v1 as uuid} from 'uuid';
import { getitems , deleteItems } from '../actions/itemActions';

export default function ShoppingList(props) {

 const items = useSelector(state => state.item.items);
 // const [items, setitems] = useState(Items);


  const dispatch = useDispatch();

useEffect(() => {
dispatch(getitems())
}, [])
 
console.log(items);
 
/*
const del = (itemid)=>{
    let itemse =  items.filter(item => item.id !== itemid.id)
setitems(itemse);
}
*/


const onClickDelete = (id)=>{
    dispatch(deleteItems(id))

}


return (
        <div>
            <Container>

<ListGroup>
    
<TransitionGroup className= "shopping-list">

{items.map((item)=>

<CSSTransition key = {item._id} timeout= {500} classNames = "fade">

<ListGroupItem>
   
    <Button className = "remove-btn" color = "danger" size = "sm" padding = "5rem"
    
    
// onClick={()=>del(itemid)
onClick={()=> onClickDelete(item._id)} //onclick  
    > 
        &times;
    </Button>
    
    {item.name}

</ListGroupItem>

</CSSTransition>

)}

</TransitionGroup>

</ListGroup>



</Container>
        </div>
    )
}


























/*


<Button  
color ="dark"
className = "button"
style={{ marginBottom: '2rem'}}
onClick= {()=>{
const name  = prompt('Enter Item');
if(name) {
    
 setitems(...items, {id:uuid(), name:name} );
console.log(items);
} 
}}
> Add Item </Button>


*/
/*
    var ite= [
        {id:uuid(), name: 'eggs'},
    {id:uuid(), name: 'milk'},
    {id:uuid(), name: 'sugar'},
    {id:uuid(), name: 'water'},
]
 const [items, setitems] = useState(ite);


  */