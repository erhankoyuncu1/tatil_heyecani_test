import { Schema, model } from "mongoose";
import { Room, RoomSchema } from "./room.model";
import { CommentSchema } from "./comment.model";

export interface Hotel{
    id: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    email: string;
    imageUrl: string;
    images: string[];
    rooms: Room[];
    isFull: boolean;
    managerID: string;
    starCount: number;
    comments:Comment[];
    tags?: string[];
}

export const HotelSchema = new Schema<Hotel>(
    {
        name: {type:String, required:true},
        address: {type:String, required:true},
        city: {type:String, required:true},
        phone: {type:String, required:true},
        email: {type:String, required:true},
        imageUrl: {type:String, required:true},
        images: {type:[String], required:true},
        rooms: {type:[RoomSchema], required:true},
        managerID: {type: String, required:true},
        starCount: {type: Number, required:true},
        comments: {type: [CommentSchema], required:true},
        tags: {type: [String]}
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

export const HotelModel = model<Hotel>('hotel', HotelSchema);