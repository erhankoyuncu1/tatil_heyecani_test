import { Schema, model } from "mongoose";

export interface User{
    id:string;
    email:string;
    password:string;
    name:string;
    surname:string;
    phoneNo:string;
    token:string;
    isAdmin:boolean;
    isManager:boolean;
}

export const UserSchema = new Schema<User>(
    {
        email:{type:String, required:true},
        password:{type:String, required:true},
        name:{type:String, required:true},
        surname:{type:String, required:true},
        phoneNo:{type:String, required:true},
        token:{type:String, required:true},
        isAdmin:{type:Boolean, required:true},
        isManager:{type:Boolean, required:true},
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

export const UserModel = model<User>('user', UserSchema);