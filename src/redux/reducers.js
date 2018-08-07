import { combineReducers } from 'redux'
//estado inicial
const initialState = {
  layout : "Template 1"
}

let changeLayout = (state = initialState, action) => {
  switch(action.type){
    case 'change_layout' :
    return Object.assign({}, state, {
      layout : state.layout === "Template 1" ? "Template 2" : "Template 1"
    });
    default :
    return state;
  }
}

export const reducer = combineReducers({
  changeLayout
})
