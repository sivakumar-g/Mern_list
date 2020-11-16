import {v1 as uuid} from 'uuid';
import {ACTION_TYPES} from '../actions/types'


const initialState = {
 items:   [ ],
 loading : false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState , action)
{
switch(action.type){

case ACTION_TYPES.GET_ITEMS :
return {
    ...state,
    items : action.payload,
    loading:false
}


case ACTION_TYPES.ADD_ITEM :
return { 
    ...state,
    items  : [...state.items,action.payload]
}



case ACTION_TYPES.DELETE_ITEM :
return {
    ...state,
    items  :  state.items.filter(item => item._id !== action.payload)
}



case ACTION_TYPES.ITEMS_LOADING :
return { 
    ...state,
    loading : true
}



















default: {return state;}

}





}//fn