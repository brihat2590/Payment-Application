import express from "express"
const app=express()
const UserRouter=express.Router();
app.use(express.json())
UserRouter.post("/",async(req,res)=>{

})

export default UserRouter;