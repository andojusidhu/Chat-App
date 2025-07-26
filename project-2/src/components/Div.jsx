import React from 'react'
import Login from './Login'

const Div = (props) => {
    
  return (
    <div>
        <div className="main">
            
            <h3> 
              name : {props.name}  
            </h3>
            <h3>
              age :{props.age}
            </h3>
            <h3>
              rollno={props.rollno}
            </h3>
        </div>
    </div>
  )
}

export default Div