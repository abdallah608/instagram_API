import { postModel } from "../../../dataBase/models/postModel/post.model.js";
import appError from "../../../utilities/error/appError.js";
import catchAsyncError from "../../../utilities/error/catchAsyncError.js";
import cloudinary from "../../../utilities/upload/cloudinary.js";


//---- add post ---//
export const addPost = catchAsyncError(
    async(req,res,next)=>{
        if(!req.file){return next(new appError("file type not accepted",400))}
        let {text}=req.body
        let id =req.userId
        if(id== undefined){return next(new appError("you should login first",404))}
        let time=Date.now()
        let {secure_url} = await cloudinary.uploader.upload(req.file.path,{folder:"postPic"})
        let addPost= await postModel.insertMany({text,createdBy:id,postDate:time,photoPath:secure_url})
        res.status(200).json({message:"done",addPost})
    }
)
//---- get user post ---//
export const userPost= catchAsyncError(
    async(req,res,next)=>{
        let found= await postModel.find({createdBy:req.userId}).populate("createdBy","-password -__v -confirmedEmail -isLoggedIn -code -isOnline -isDeleted")
        if(!found){return next(new appError("no posts found",400))}
        res.status(200).json({message:"done",found})
    }
)

//---- get all user post ---//
export const allPost= catchAsyncError(
    async(req,res,next)=>{
        let found= await postModel.find({}).populate("createdBy","-password -__v -confirmedEmail -isLoggedIn -code -isOnline -isDeleted")
        if(!found){return next(new appError("no posts found",400))}
        res.status(200).json({message:"done",found})
    }
)
//---- delete post ---//
export const deletePost= catchAsyncError(
    async(req,res,next)=>{
        let{_id}=req.body
        let id=req.userId
        let founded = await postModel.findById({_id})
        if(!founded){return next(new appError("no posts found",400))}
        if(founded.createdBy != id){return next(new appError("you are not authorized",404))}
        let deleted = await postModel.deleteOne({_id})
        if(!deleted){return next(new appError("no posts found",400))}
        res.status(200).json({message:"done",deleted})
   
    }
)
//---- update post ---//
export const updatePost= catchAsyncError(
    async(req,res,next)=>{
        let{_id,text}=req.body
        let id=req.userId
        let founded = await postModel.findOne({_id})
        if(!founded){return next(new appError("no posts found",400))}
        if(founded.createdBy != id){return next(new appError("you are not authorized",404))}
        let updated = await postModel.updateOne({_id},{text})
        if(!updated){return next(new appError("no thing updated",400))}
        res.status(200).json({message:"done",updated})
   
    }
)
//---- update post status ---//
export const updatePostStatus= catchAsyncError(
    async(req,res,next)=>{
        let{_id,privacy}=req.body
        let id=req.userId
        let founded = await postModel.findOne({_id})
        if(!founded){return next(new appError("no posts found",400))}
        if(founded.createdBy != id){return next(new appError("you are not authorized",404))}
        let updated = await postModel.updateOne({_id},{privacy})
        if(!updated){return next(new appError("no thing updated",400))}
        res.status(200).json({message:"done",updated})
   
    }
)


//-----like post ---//

export const likePost = catchAsyncError(
    async(req,res,next)=>{
        let{postId}=req.body
        let id=req.userId
        let likes = await postModel.findByIdAndUpdate(postId,{$addToSet:{likesId:[id]},$pull:{disLikesId:id}},{new:true})
        if(!likes){return next(new appError("not found",400))}
        likes.totalLike = likes.likesId.length - likes.disLikesId.length
        likes.save() 
        res.status(200).json({message:"done",likes})
    }
)
//-----disLike post ---//

export const disLikePost = catchAsyncError(
    async(req,res,next)=>{
        let{postId}=req.body
        let id=req.userId
        let likes = await postModel.findByIdAndUpdate(postId,{$addToSet:{disLikesId:[id]},$pull:{likesId:id}},{new:true})
        if(!likes){return next(new appError("not found",400))}
        likes.totalLike = likes.likesId.length - likes.disLikesId.length
        likes.save() 
        res.status(200).json({message:"done",likes})
    }
)
