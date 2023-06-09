import { useState } from "react"
import style from "./homepage.module.css"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"


const Login=()=>{
    let[name,setName]=useState("")
    let[phone,setPhone]=useState("")
    let[password,setPassword]=useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
       
    }

    let phoneData=(e)=>{
        setPhone(e.target.value)
        
    }
    let passwordData=(e)=>{
        setPassword(e.target.value)
        
    }

    let loginhandle=()=>{
        let payload={name,phone,password}
        axios.post("http://localhost:3000/persons",payload)
        .then(()=>{
            console.log("got data");
        })
        .catch(()=>{
            console.log("not got data");
        })

         navigate("/user")
    }
    
    

    return(
        <div>
            <section id={style.home}>

                <div class={style.fb}>
                    <h1>facebook</h1>
                    <p>Connect with friends and the world around you on Facebook</p>
                  
                </div>

                <div class={style.fblogin}>
                    <input type="text" placeholder="UserName" value={name} onChange={nameData}/>
                    <input type="text" placeholder="Phone Number" value={phone} onChange={phoneData}/>
                    <input type="text" placeholder="Password" value={password} onChange={passwordData}/>
                    <button class={style.btn} onClick={loginhandle}>Log in</button>

                </div>
            </section>
        </div>
    )
}
export default Login