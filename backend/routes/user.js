import express from "express"
const app=express()
const UserRouter=express.Router();
import jwt from "jsonwebtoken"
import { z } from "zod";
import { User } from "../db";
import dotenv from "dotenv"
import { authmiddleware } from "../middleware";
dotenv.config();
app.use(express.json())
UserRouter.post("/signup",async(req,res)=>{
    const {username,password,firstName,lastName}=req.body;
    const requiredbody= z.object({
        username:z.string().min(4).max(10),
        password:z.string().min(3).max(10)
    })
    if(!parsedData.error){
        res.json({
            message:error.message
        })
    }
    const parsedData=requiredbody.safeParse(req.body);
    const user=await User.findOne({
        username:username


    })
    if(user){
        res.json({
            message:"the user already exists"
        })
    }
    
    else{
        const user=await User.create({
            username:username,
            password:password,
            firstName:firstName,
            lastName:lastName
        })
        
        const userId=user._id
        const token=jwt.sign({
            userId
        },process.env.JWT_SECRET)
        res.status(200).send({
            messasge:"the user has been created sucessfully",
            token:token
        })
    }

})
UserRouter.post("/signin",async(req,res)=>{
    const{username,password}=req.body;
    const requiredSigninBody=z.object({
        username:z.string().min(3).max(15),
        password:z.string().min(4).max(15)
    })
    const {parsedData}=requiredSigninBody.safeParse(req.body)
    if(!parsedData){
        res.json({
            message:"the format is incorrect"
        })
    }
    try{
        const user=await User.findOne({
            username:username,
            password:password
        })
        if(!user){
            res.status(404).send({
                message:"the user does not exist"
            })
        }
        const token=jwt.sign({
            userId:user._id
        },process.env.JWT_SECRET)
        res.json({
            token:token
        })
        return;


    }
    catch(e){
        res.json({
            message:e.message
        })

    }
})

UserRouter.put("/",authmiddleware,async(req,res)=>{
    const{password,firstName,lastName}=req.body;
    const requiredUpdataBody=z.object({
        
        password:z.string().optional(),
        firstName:z.string().optional(),
        lastName:z.string().optional()
    })
    const {parsedData}=requiredUpdataBody.safeParse(req.body)
    if(!parsedData){
        res.json({
            message:"incorrect format bro"
        })
    }
    const user=await User.updateOne(req.body,{
        id:req.userId
    })
    res.json({
        message:"the user was update successfully"
    })
})

export default UserRouter;