import Homepage from "./Components/Homepage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Components/Login"
import Users from "./Components/Users"
import EditUsers from "./Components/EditUsers"
const App=()=>{
    return(
        <div>
            

            <BrowserRouter>
            <Homepage/>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/user" element={<Users/>}></Route>
                <Route path="/edituser/:index" element={<EditUsers/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App