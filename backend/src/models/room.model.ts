import { Schema, model } from "mongoose";
import { RoomType, RoomTypeSchema } from "./roomType.model";

export interface Room {
  id: string;
  name: string;
  nihgtPrice: number;
  roomType: RoomType;
  description: string;
  imageUrl: string;
}

export const RoomSchema = new Schema<Room>(
  {
    name: { type: String, required: true },
    nihgtPrice: { type: Number, required: true },
    roomType: { type: RoomTypeSchema, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const RoomModel = model<Room>('room', RoomSchema);