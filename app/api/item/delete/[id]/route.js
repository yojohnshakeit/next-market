import {NextResponse} from "next/server"
import connectDB from "@/app/utils/database"
import { ItemModel } from "@/app/utils/schemaModels"

export async function DELETE(request, context){
    const reqBody = await request.json()
    try{
        await connectDB()
        const params = await context.params
        if(singleItem.email===reqBody.email){
        await ItemModel.deleteOne({_id:params.id})

        return NextResponse.json({message:"アイテム削除成功"})
        } else {
            return NextResponse.json({message:"他の人が作成したアイテムです"})
        }
    } catch(err){
        return NextResponse.json({message:"アイテム削除失敗"})
    }
    }
