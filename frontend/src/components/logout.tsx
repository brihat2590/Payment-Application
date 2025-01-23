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
            <button onClick={handlelogout} className="border-2 border-transparent p-2 m-2 bg-blue-300 rounded-lg w-15 shadow-lg">logout</button>
        </div>
    )
}