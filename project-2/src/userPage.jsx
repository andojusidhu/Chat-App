// import React, { useEffect } from 'react'
// import { useState } from 'react'
    
//     const userPage=()=>{
//          const [user, setUser] = useState([])
//         const userHandler=async()=>{
//                 const response=await fetch(userDetails)
//                 const newData=await response.json()
//                 setUser(newData)
//         }
//     }
//      useEffect(()=>{
//             console.log(userHandler())
//         },[]);
//     console.log(user)
    
//   return (
//     <div>
//         <h1>{user.map((item)=>{
//             return (
//                 <div className="userSection">
//                     {item.id}
//                 </div>
//             )
//         })}</h1>
//     </div>
//   )


// export default userPage