import { Schema, model } from "mongoose";
import { Room } from "./room.model";

export interface RoomType{
    name:string;
}

export const RoomTypeSchema = new Schema<RoomType>(
    {
        name:{type:String,required:true}
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

export const RoomTypeModel = model<RoomType>('room-type', RoomTypeSchema);