import Header from "./Header"
import React, { useState } from 'react'


const Login = ()=>{
    const [signIn, setSignIn] = useState(true)

    const handleClick=()=>{
        setSignIn(!signIn)
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
        <img src ='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt= "netflix_backkground"/>
            </div>
            <form className = "bg-black absolute p-20 w-4/12 my-60 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl m-2 p-2">{signIn? "Sign In" : "Sign Up"}</h1>
                <input type="text" placeholder = "Email or Phone" className="m-4 p-4 w-full bg-slate-200 text-black"/><br/>
                {!signIn ? <><input type="text" placeholder = "Name" className="m-4 p-4 w-full bg-slate-200 text-black"/><br/></> : null}
                <input type="password" placeholder = "Password" className="m-4 p-4 w-full bg-slate-200 text-black"/><br/>
                <button className="p-4 m-4 rounded-lg  bg-red-600 w-full">{signIn? "Sign In" : "Sign Up"}</button>
                <p className="m-4 w-full cursor-pointer" onClick={handleClick}>{signIn? "New to Netlix? Sign Up Now" : "Already a User, Sign In now"}</p>
            </form>
            </div>
    )
}

export default Login