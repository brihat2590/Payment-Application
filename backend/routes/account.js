import express from "express"
const app=express()
const router=express.Router();
import { authmiddleware } from "../middleware.js";
import { Account,User } from "../db.js";
import mongoose from "mongoose";


router.get("/balance",authmiddleware,async(req,res)=>{
    try{
        const account=await Account.findOne({
            userId:req.userId
        })
        if(!account){
            res.json({
                message:"the account does not exist"
            })
        }
        res.json({
            balance:account.balance
        })

    }
    catch(error){
        res.json({
            message:error.message
        })

    }

})
router.post("/transfer", authmiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});


export default router;