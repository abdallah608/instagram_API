import joi from "joi"

export const postSchema = joi.object({
    text: joi.string().min(0).max(200),
    })
export const updateSchema = joi.object({
    text: joi.string().min(0).max(200),
    _id:joi.string().hex().length(24).required()
     })
