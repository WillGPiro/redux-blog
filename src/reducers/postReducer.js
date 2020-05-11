import { ADD_POST } from "../actions/postActions"

const initialState=[]
//When we call reducer, we return our state = empty array, and the ADD_X action payload (e.g. new post). 
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}