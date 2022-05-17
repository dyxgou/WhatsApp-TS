import { Schema , Document } from "mongoose";

export interface IUser extends Document
{
  username : string,
  email : string,
  password :  string,
  friends : Array<Schema.Types.ObjectId & IUser>,
  friendsPending : Array<Schema.Types.ObjectId & IUser>,
  friendsRequest : Array<Schema.Types.ObjectId & IUser>,
  avatar : {
    url : string,
    publicId : string
  },
  description : string,
}

const UserSchema = new Schema<IUser>(
  {
    username : {
      type : String,
      trim : true, 
      required : true
    },
    email : {
      type : String,
      required : true, 
      unique : true
    },
    password : {
      type : String, 
      required : true
    },
    avatar : String,
    description : {
      type : String,
      trim : true, 
      max : 300
    },
    friends : [
      {
        type : Schema.Types.ObjectId,
        ref : "users"
      }
    ],
    friendsPending : [
      {
        type : Schema.Types.ObjectId,
        ref : "users"
      }
    ],
    friendsRequest : [
      {
        type : Schema.Types.ObjectId,
        ref : "users"
      }
    ],
  }
)

export default UserSchema