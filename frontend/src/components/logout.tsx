import { useNavigate } from "react-router-dom"

export default function Logout(){
    const navigate=useNavigate()
    function handlelogout(){
        localStorage.removeItem("token")
        alert("you have been logged out")
        navigate("/signin")

    }
    return(
        <div>
            <button onClick={handlelogout}>logout</button>
        </div>
    )
}