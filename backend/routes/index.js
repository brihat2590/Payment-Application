import express from "express"
const app=express()
const rootRouter=express.Router();
import {z} from "zod"
import { User } from "../db";

app.use(express.json())


rootRouter.post("/signup",async(req,res)=>{
    const{username,password}=req.body
    const requiredbody=z.object({
        username:z.string.min(3).max(15),
        password:z.string().min(3).max(15)
    })
    const parsedData= requiredbody.safeParse(req.body)
    if(parsedData.error){
        res.json({
            message:error.message
        })
    }


})

rootRouter.post("/signin",async(req,res)=>{
    const{email,password}=req.body;
    const user=await User.findOne({
        email:email,
        
    })
    if(!user){
        res.json({
            message:"the user cannt be found in the database"
        })
    }
    else{
        
    }

})
export default rootRouter;