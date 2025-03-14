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
            <div className="flex items-center">
                <svg
                    className="h-10 w-10 text-blue-600 ml-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 0L3 7l1.63 1.27L12 14l7.36-5.73L21 7l-9-7zm0 7.73L5.64 12 12 16.27 18.36 12 12 7.73zM21 9v12l-9-7-9 7V9l1.63 1.27L12 16l7.36-5.73L21 9z" />
                </svg>
                
                <div className=" text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent  md:text-5xl ml-3 tracking-tighter">PaySwift
                    
                </div>
            </div>
            
            <div className="flex justify-center items-center m-2 p-3">
                <div className="pt-3 pr-3 pb-3  m-1 text-xl bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">Hello</div>
                <div className="pt-3 pr-3 pb-3  text-lg font-semibold">{<User/>}</div>
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2 ml-2">
                    <div className="flex flex-col justify-center h-full text-xl " onClick={(e)=>{
                        setOpen(!open)
                    }}><FirstLetter/></div>
                </div>
                <div>{open&&<div className="absolute right-0 mt-12 w-25 bg-white shadow-lg rounded-lg border  p-2 "><Logout/></div>}</div>
                
                
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