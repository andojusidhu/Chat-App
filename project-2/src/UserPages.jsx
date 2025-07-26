// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// const userDetails =fetch("https://jsonplaceholder.typicode.com/posts")
// console.log('user deatils :',userDetails)
   
// const UserPages = () => {
//     const [user, setUser] = useState([])
//     const userHandler=async () =>{
//         const response=await fetch(userDetails)
//         const newData=await response.json()
//         setUser(newData)
//     }
//         useEffect(()=>{
//             console.log(userHandler())
//         },[]);
//     console.log(user)
//   return (
//     <div>
//        {
//         user.map((item)=>{
//             return(
//                 <div className="userSection">
//                     <h2>{item.id}</h2>
//                     <h3>{item.title}</h3>
//                 </div>
//             )
//         })
//        }
//     </div>
//   )
// }

// export default UserPages
import React from 'react'

const UserPages = () => {
  return (
    <div>UserPages</div>
  )
}

export default UserPages