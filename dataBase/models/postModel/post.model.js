import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

    text:String,
    postDate:Date,
    photoPath:String,
    likesId:[{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }],
    disLikesId:[{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }],
    totalLike:{
        type:Number,
        default:0
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
        },
    privacy:{
        type:String,
        enum:['archive','public'],
        default:"public"
    }
},{
timestamps:true
}) 


export const postModel =  mongoose.model("post",postSchema)
