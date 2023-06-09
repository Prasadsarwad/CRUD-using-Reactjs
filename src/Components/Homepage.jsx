import { Link } from "react-router-dom"
import style from "./homepage.module.css"
const Homepage=()=>{
    return(
        <div>
             <section id={style.nav}>
                <Link to="/login">Login</Link>
                <Link to="/user">Users</Link>
             </section>
        </div>
    )
}
export default Homepage