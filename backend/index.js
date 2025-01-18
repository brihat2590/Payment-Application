import express from "express"
import rootRouter from "./routes"
import UserRouter from "./routes/user"
import cors from "cors"
const app=express()
app.use(cors())

app.use("/api/v1",rootRouter)
app.use("/api/v1/users",UserRouter)