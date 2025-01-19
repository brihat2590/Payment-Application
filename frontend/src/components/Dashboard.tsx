import { useState } from "react"
import { SendMoney } from "./SendMoney"


function Dashboard() {
    const[open,setOpen]=useState(false)
  return (
    <div className="h-screen w-full flex flex-col ">
        <div className="flex items-center justify-between border-b border-2">
            <div className="p-3 m-2 text-2xl font-semibold">Payments App</div>
            <div className="flex justify-center items-center m-2 p-3">
                <div>hello user</div>
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2 ml-2">
                    <div className="flex flex-col justify-center h-full text-xl">U</div>
                </div>
                
            </div>

        </div>
        <div>
            <div className="ml-3">Your balance is:</div>
            <div className="ml-4 "><input type="text" placeholder="Search Users..." className="w-full p-1.5"></input></div>

        </div>
        



    </div>
  )
}

export default Dashboard