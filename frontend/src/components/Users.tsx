import axios from "axios"
import { useEffect, useState } from "react"

export default  function Users(){
    const[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk").then(response=>setUsers(response.data.user))

        


    },[])
    return(
        < >
        <div className="text-xl tracking-wide mt-6">
            Users

        </div>
        <div>
            <input className="w-full border px-1 py-2" placeholder="search users ..."></input>

        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
        
        </>
        

        
    )
}

function User({user}:any) {
    return <div className="flex justify-between items-centre 
    ">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col p-4   ">
            <button className="p-2 ml-12 rounded-md text-neutral-300  bg-gray-800">Send Money</button>
        </div>
    </div>
}
