import express from "express"
const app=express()
const accountRouter=express.Router();
import { authmiddleware } from "../middleware";
import { Account } from "../db";
import { string } from "zod";
accountRouter.post("/")

accountRouter.get("/balance",authmiddleware,async(req,res)=>{
    const account=await Account.findOne({
        userId:req.userId
    })
    res.json({
        balance:account.balance
    })

})
accountRouter.post("/transfer",authmiddleware,async(req,res)=>{
    const{amount,to}=req.body
    const requiredAccountBody=z.object({
        account:{
            type:String,
            required:true,

        },
        to:{
            type:String,
            required:true
        }
        
    })
    const account=await Account.findOne({
        userId:req.userId
    })
    if(account.balance<amount){
        res.json({
            message:"insufficient funds bro"
        })
    }
    const toAccount=await Account.findOne({
        userId:req.userId
    })
    if(!toAccount){
        res.json({
            message:"invalid account bro"
        })
    }
    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })
    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
});





export default accountRouter;