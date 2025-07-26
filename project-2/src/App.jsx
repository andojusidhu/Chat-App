import React from 'react'
import Div from './components/Div'
// import User from './userPage'
import UserPages from './UserPages'
import Login from './components/Login'

// const user={
//   name:"sidhu",
//   age:19,
//   rollno:9
// }
const App = () => {
  return (
    <div>
      {/* <Div name={user.name} age={user.age} rollno={user.rollno}/> */}
      {/* <UserPages /> */}
      <Login />
    </div>
  )
}

export default App