import { useEffect, useState } from "react"
import style from "./homepage.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

import { Navigate } from "react-router-dom"

const EditUsers=()=>{


    let[name,setName]=useState("")
    let[phone,setPhone]=useState("")
    let[password,setPassword]=useState("")

    let navigate=useNavigate()

    let{index}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/persons/${index}`)
        .then((response)=>{
           console.log(response.data);
           setName(response.data.name)
           setPhone(response.data.phone)
           setPassword(response.data.password)
        })
        .catch(()=>{
            console.log("something went wrong");
        })
    },[])

    let nameData=(e)=>{
        setName(e.target.value)
    }

    let phoneData=(e)=>{
        setPhone(e.target.value)
    }

    let passwordData=(e)=>{
        setPassword(e.target.value)
    }

    let formhandle=()=>{
    let payload={name,phone,password}
     axios.put(`http://localhost:3000/persons/${index}`,payload)
    .then(()=>{
        console.log("data is updated");
    })
    .catch(()=>{
        console.log("something went wrong");
    })
     navigate("/user")
    }

   
    return(
        <div>
        <section id={style.home}>

            

            <div class={style.fblogin}>
                 <h1>Edit User</h1>
                <input type="text" placeholder="UserName" value={name} onChange={nameData}/>
                <input type="text" placeholder="Phone Number" value={phone} onChange={phoneData}/>
                <input type="text" placeholder="Password" value={password} onChange={passwordData}/>
                <button class={style.btn} onClick={formhandle} >Update</button>

            </div>
        </section>
    </div>
    )
}

export default EditUsers