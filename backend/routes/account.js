import express from "express"
const app=express()
const accountRouter=express.Router();
import { authmiddleware } from "../middleware";
import { Account } from "../db";
accountRouter.post("/")

accountRouter.get("/balance",authmiddleware,async(req,res)=>{
    const account=await Account.findOne({
        userId:req.userId
    })
    res.json({
        balance:account.balance
    })

})


export default accountRouter;