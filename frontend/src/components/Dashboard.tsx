import { useState } from "react"

import Users from "./Users"


function Dashboard() {
    const[open,setOpen]=useState(false)
  return (
    <div className="h-screen w-full flex flex-col ">
        <div className="flex items-center justify-between border-b border-2">
            <div className="p-3 m-2 text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent ">Payments</div>
            <div className="flex justify-center items-center m-2 p-3">
                <div className="p-3 m-2 text-xl">hello user</div>
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2 ml-2">
                    <div className="flex flex-col justify-center h-full text-xl">U</div>
                </div>
                
            </div>

        </div>
        <div>
            <div className="p-2 m-3">Your balance is :</div>
            <Users/>
            

        </div>
        



    </div>
  )
}

export default Dashboard