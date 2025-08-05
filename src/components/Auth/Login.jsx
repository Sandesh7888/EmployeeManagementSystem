import React, { useState } from 'react'

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")



    const submitHandler=(e)=>{

        e.preventDefault();
        console.log("email is",userName);
        console.log("password is",password);

        setUserName("")
        setPassword("")
        
    }


  return (
    <>
    <div className="login-container flex justify-center items-center h-screen w-screen ">
        <div className="login-box border-emerald-600 border-2 rounded-xl  p-20  ">
           
            <form className='flex justify-center items-center flex-col' onSubmit={(e)=>{submitHandler(e)}}>
                 <h2 className='mb-5 font-bold'>Login</h2>
                <input className=' bg-transparent  border-emerald-600 border-2 rounded-4xl p-2 'value={userName} onChange={(e)=>{
                    setUserName(e.target.value)
                }} type="text" id="username" placeholder='Enter Username' name="username" required /><br></br>
                
                <input className=' bg-transperent  border-emerald-600 border-2 rounded-4xl p-2 ' value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" id="password" placeholder='Enter Password' name="password" required /><br/>

                <button className='outline-none py-2 px-8 w-full text-lg mt-7 rounded-full hover:bg-emerald-400 bg-emerald-600 border-none text-center  '  > Log in</button>
            </form>
        </div>
    </div>

      
    </>
  )
}

export default Login
