import { ADD_POST, UPDATE_POST } from "../actions/postActions"

const initialState=[]
//When we call reducer, we return our state = empty array, and the ADD_X action payload (e.g. new post). 
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map((post, i) => {
        if(i === action.payload.index) 
          return action.payload.post;
          return post;
      })
    default:
      return state;
  }
}