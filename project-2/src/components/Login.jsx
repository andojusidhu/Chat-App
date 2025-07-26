import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [name, setName] = useState('')
    const [age, setage] = useState('')
    const [rollno, setrollno] = useState('')
    const [submitted, setsubmitted] = useState(false)
    function valid()
    {
        console.log(name);
        console.log(age);
        console.log(rollno);
        if(name=="" || name==null)
        {
            alert("enter name");
        }
        else if(age=='' || age==null)
        {
            alert("enter age");
        }
        else if(rollno=='' || rollno==null)
        {
            alert("enter rollno");
        }
        else{
            setsubmitted(true)
        }
    }
  return (
    <div>
        {
            ! submitted ?
            <div className="main2">
                <h2>Enter details :</h2>
                Name : <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  placeholder='enter name :'></input><br></br>
                Age : <input  type='text' value={age} onChange={(e)=>setage(e.target.value)}  placeholder='enter age :'></input><br></br>
                Rollno : <input type='text' value={rollno} onChange={(e)=>setrollno(e.target.value)} placeholder='enter rollno  :'></input><br></br>
                <button onClick={valid}>Submit</button>
            </div>
        
        :

            <div>
                <h1>Your details :</h1><br></br>
                <h2>Name :{name}</h2>
                <h2>Age : {age}</h2>
                <h2>RollNo : {rollno}</h2>
                <p>Your Responses Recorded</p>
            </div>
    }
    </div>    
  )
}

export default Login