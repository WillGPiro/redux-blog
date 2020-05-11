import { ADD_POST } from "../actions/postActions"

const initialState=[]
//we return our state = empty array, and the ADD_X action payload. 
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}