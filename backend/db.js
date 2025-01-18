import mongoose,{Schema,model} from "mongoose";
import dotenv from "dotenv"


dotenv.config()


export default async function Connection(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to the database")

    
}
Connection();


const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,

    },
    password:{
        type:String,
        required:true,
        minLength:5,
        maxLenght:15
    },
    firstName:String,
    lastName:String

})

export const User=mongoose.model("users",userSchema);
