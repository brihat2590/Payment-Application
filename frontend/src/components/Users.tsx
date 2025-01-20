import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";



export default  function Users(){
    const[users,setUsers]=useState([]);
    const[filter,setFilter]=useState("");
    

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter).then(response=>setUsers(response.data.user))

        


    },[filter])
    return(
        < >
        <div className="text-xl tracking-wide mt-6 m-2 p-3">
            Users

        </div>
        <div>
            <input onChange={(e)=>setFilter(e.target.value)} className="w-full border p-3 m-2" placeholder="search users ..."></input>

        </div>
        <div className="p-3 m-2">
            {users.map(user => <User user={user} />)}
        </div>
        
        </>
        

        
    )
}

function User({user}:any) {
    const navigate=useNavigate()
    return <div className="flex justify-between items-centre 
    ">
        <div className="flex items-center">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2  ">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full p-2 m-2 font-light">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col p-4   ">
            <button className="p-2 ml-12 rounded-md text-neutral-300  bg-gray-800 cursor-pointer" onClick={()=>navigate("/send?id="+user._id+"&name="+user.firstName)} >Send Money</button>
        </div>
    </div>
}
