import {v1 as uuid} from 'uuid';
import {ACTION_TYPES} from '../actions/types';
import axios from 'axios';

export const getitems = ()=> callback =>{
    callback(itemsLoading())

axios.get('items/')
.then(res=> {
    console.log(res.data);
    callback({
        type: ACTION_TYPES.GET_ITEMS,
        payload:res.data
    })
}
    )
    
}


export const deleteItems = (id)=> callback =>{
axios.delete('/items/'+id,)
.then(res =>
    callback({
        type:ACTION_TYPES.DELETE_ITEM,
        payload:id
    }))
  
}


export const addItem = (item)=> callback=> {

    axios.post('/items' ,item)
    .then(res =>
        callback({
            type: ACTION_TYPES.ADD_ITEM,
            payload:res.data
        })
        )
 
        
}


export const itemsLoading = ()=>{

    return{
        type: ACTION_TYPES.ITEMS_LOADING
    }
}