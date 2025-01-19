import express from "express"
const app=express()
const rootRouter=express.Router();

import UserRouter from "./user";
import accountRouter from "./account";

app.use(express.json())

rootRouter.use("/users",UserRouter)
rootRouter.use("/account",)





export default rootRouter;