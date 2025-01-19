import express from "express"
import cors from "cors"
const app=express()
app.use(cors())
import rootRouter from "./routes"


app.use("/api/v1",rootRouter)



app.listen(3000,()=>{
    console.log("listening on the port 3000")
})