import jwt from "jsonwebtoken"
const JWT_SECRET=process.env.JWT_SECRET||"";

export const authmiddleware=((req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(404).send({
            token:"failure in the retreival of the token"
        })
    }
    const token=authHeader.split(" ")[1];
    try{
        const decoded=jwt.verify(token,JWT_SECRET)
        if(decoded){
            decoded.userId=req.userId;
            next();


        }
        else{
            res.status(403).send({
                message:"decode vayena"

            })
        }
    }
    catch(e){
        res.json({
            message:"some error occured in middleware"
        })
    }
})