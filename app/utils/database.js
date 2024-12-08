import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://takeshi:serow250@cluster0.tuvmc.mongodb.net/nextMarket15Data?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    } catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB
