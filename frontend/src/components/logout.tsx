import { useNavigate } from "react-router-dom"
import { CiSettings } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";


export default function Logout(){
    const navigate=useNavigate()
    function handlelogout(){
        localStorage.removeItem("token")
        alert("you have been logged out")
        navigate("/signin")

    }
    return(
        <div>
            <div onClick={handlelogout} className="w-full px-4 py-2 text-left text-red-700  rounded-md hover:bg-red-200 pl-2 flex gap-1 items-center">
                <TbLogout/>

                <span>logout</span>
                
                </div>
            <div className="w-full flex px-4 py-2 text-left text-red-700 hover:bg-red-200 rounded-md  gap-1 items-center pl-2">
                <CiSettings/>
                
                <p>Settings</p>
                </div>
        </div>
    )
}