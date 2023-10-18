import React,{useReducer} from 'react'

const UseReducer = () => {
   const reducer =((state, action)=>{
    if(action.type==="increment"){
        state = state+1;
    }
    if(action.type>0 && action.type ==="decrement" ){
        state = state-1;
    }
    return state;

   })
    const initialData= 10
    const [state,dispatch]= useReducer(reducer,initialData)
  return (
    <>
        <div className="center_div">
        <p>My Data:{state}</p>
        <div className='button2' onClick={() =>dispatch ({type: "increment"})} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          increment </div>
        <div className='button2' onClick ={()=>dispatch ({type: "decrement"})} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        decrement</div>
      </div>
    </>
  )
}

export default UseReducer
// on the behalfof useState we can use  useReducer it works same but it clears all the code specifically.
