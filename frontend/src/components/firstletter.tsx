import { useEffect, useState } from "react"
import axios from "axios";

export default function FirstLetter(){
    const [user,setUser]=useState("")
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/user',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }

        }).then((response)=>{
            setUser(response.data.user.firstName)
        })
        console.log(user)

    },[])
   
    return(
        <div>
            {user[0]}
            

        </div>
    )
}