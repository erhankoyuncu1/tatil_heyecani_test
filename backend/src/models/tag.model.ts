import { Schema, model } from "mongoose"

export interface Tag{
    id:string;
    name: string;
    count: number;
}

export const TagSchema = new Schema<Tag>(
    {
        name:{type:String, required:true},
        count:{type:Number, required:true},
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

export const TagModel = model<Tag>('tag', TagSchema);