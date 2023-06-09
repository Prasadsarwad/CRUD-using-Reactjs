import { useEffect, useState } from "react"
import style from "./homepage.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Users=()=>{

    let[content,setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/persons")
        .then((response)=>{
             console.log(response.data);
             setContent(response.data)
        })
        .catch(()=>{
            console.log("didnt got data");
        })
    },[])

    let deletedata=(value)=>{
        axios.delete(`http://localhost:3000/persons/${value}`)
        window.location.assign("/user")
    }
    
    return(
        <div id={style.usershome} >

               {content.map((x)=>{
                return(
                    <div id={style.cards}>
                    <table >
                    <tr>
                        <td>Name</td>
                        <td>:{x.name}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>:{x.phone}</td>
                    </tr>

                    <tr>
                        <td>Password</td>
                        <td>:{x.password}</td>
                    </tr>

                    <tr>
                       <td> <Link to={`/edituser/${x.id}`}>Edit</Link> </td>
                       <td> <a href="" onClick={()=>{deletedata(x.id)}}>Delete</a></td>     
                    </tr>
                </table>
                </div>

                )
               })}


            
        </div>
    )
}
export default Users