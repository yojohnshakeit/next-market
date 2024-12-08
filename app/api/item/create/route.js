import {NextResponse} from "next/server"
import connectDB from "@/app/utils/database"
import {ItemModel} from "../../../utils/schemaModels"

export async function POST(request){
    const reqBody = await request.json()

    try{
    
    await connectDB()
    await ItemModel.create(reqBody)
    return NextResponse.json({message:"アイテム作成成功"})
} catch(err){
    return NextResponse.json({message:"アイテム作成失敗"})
}
}

//mongodb+srv://<db_username>:<db_password>@cluster0.tuvmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0