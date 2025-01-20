import mongoose,{Schema,model} from "mongoose";
import dotenv from "dotenv"


dotenv.config()


mongoose.connect(process.env.MONGO_URL)
console.log("connected to the database")


const userSchema=new Schema({
    username:{
        type:String,
        
        

    },
    password:{
        type:String,
        
        minLength:5,
        maxLenght:15
    },
    firstName:String,
    lastName:String

})

const accountSchema=new Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'

    },
    balance:{
        type:Number,
        required:true

    }
})

export const User=mongoose.model("users",userSchema);
export const Account=mongoose.model("Account",accountSchema)
