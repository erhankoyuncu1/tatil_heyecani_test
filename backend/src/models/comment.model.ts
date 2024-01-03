import { Date, Schema, model } from "mongoose";

export interface Comment{
    id:string;
    userId: string;
    hotelId: string;
    comment: string;
    date: Date;
}

export const CommentSchema = new Schema<Comment>(
    {
        userId:{type:String,required:true},
        hotelId:{type:String,required:true},
        comment:{type:String,required:true},
        date:{type:VarDate,required:true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const CommentModel = model<Comment>('comment', CommentSchema);