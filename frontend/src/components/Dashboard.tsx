import { useEffect, useState } from "react"
import axios from "axios"
import User from "./user"

import Users from "./Users"
import Logout from "./logout"
import FirstLetter from "./firstletter"
import Footer from "./footer"


function Dashboard() {
    const[open,setOpen]=useState(false)
    const[balance,setBalance]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }).then((response)=>{
            setBalance(response.data.balance)
        })
        
    },[])
  return (
    <div className="min-h-screen w-full flex flex-col   ">
        <div className="flex items-center justify-between border-b border-2  ">
            <div className="p-3 m-2 text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent  md:text-5xl ml-3">Payments</div>
            <div className="flex justify-center items-center m-2 p-3">
                <div className="pt-3 pr-3 pb-3  m-1 text-xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">Hello</div>
                <div className="pt-3 pr-3 pb-3  text-lg font-semibold">{<User/>}</div>
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2 ml-2">
                    <div className="flex flex-col justify-center h-full text-xl "><FirstLetter/></div>
                </div>
                <div><Logout/></div>
                
                
            </div>

        </div>
        <div className="flex-1">
            <div className="p-2 m-3 ">Your balance is {Math.floor(balance)}</div>
            <Users/>
            
            

        </div>
        <Footer/>
        
        

        



    </div>
  )
}

export default Dashboard