import React from 'react';
//Los siguientes imports son necesarios para trabajar con redux:
import store from '../redux/store';
import {changeLayout} from '../redux/actions';


export function Nav(props){
  return (
    <nav>
    <h1>Nav</h1>
    <button onClick={props.liftState}>Change Layout with React State</button>
    <button onClick={()=>{store.dispatch(changeLayout()); console.log(store.getState().changeLayout.layout)}} >Change Layout with Redux State</button>
    <div>
      <h1>The current layout is : </h1>
      <p style={{color: "gray"}}>{props.template}</p>
    </div>

    </nav>
  )
}
