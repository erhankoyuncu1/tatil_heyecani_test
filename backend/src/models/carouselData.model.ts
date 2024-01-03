import { Schema, model } from "mongoose";

export interface CarouselData{
    id:string;
    image: string;
    imageDescription:string;
}

export const CarouselDataSchema = new Schema<CarouselData>(
    {
        image:{type:String, required:true},
        imageDescription:{type:String, required:true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)

export const CarouselDataModel = model<CarouselData>('carousel-data', CarouselDataSchema);