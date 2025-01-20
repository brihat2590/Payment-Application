import express from "express"
const app=express()
const userRouter=express.Router();
import jwt from "jsonwebtoken"
import { z } from "zod";
import { User,Account } from "../db.js";
import dotenv from "dotenv"
dotenv.config()
import { authmiddleware } from "../middleware.js";


userRouter.post("/signup",async(req,res)=>{
    const {username,password,firstName,lastName}=req.body;
    const requiredbody= z.object({
        username:z.string().min(4).max(10),
        password:z.string().min(3).max(10),
        firstName:z.string(),
        lastName:z.string()
    })
   
    const parsedData=requiredbody.safeParse(req.body);

    if(!parsedData.error){
        res.json({
            message:error.message
        })
    }
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
        const userId=user._id;
        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        })
        
        res.status(200).send({
            message:"the user has been signed up"
        })
    }

})
userRouter.post("/signin",async(req,res)=>{
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

userRouter.put("/",authmiddleware,async(req,res)=>{
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
userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})



export  {userRouter};