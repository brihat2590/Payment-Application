import express from "express"
const app=express()
const accountRouter=express.Router();
accountRouter.post("/")


export default accountRouter;