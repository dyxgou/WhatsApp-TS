import fp from "fastify-plugin"
import * as mongoose from "mongoose"
import UserSchema from "../schemas/UserSchema"
import type { IUser } from "../schemas/UserSchema"

const connectDB = fp(async (fastify) => 
{
  const URI = process.env.MONGO_URI

  if(!URI)
  {
    fastify.log.error("URI NOT FOUND")
    process.exit(1)
  }

  await mongoose.connect(URI , {
    dbName : "WhatsAppDB"
  }).then(connection => {
    fastify.decorate("store" , {
      User : connection.model("users" , UserSchema),
      connection
    })
  }).catch(err => {
    fastify.log.error(err)
    process.exit(1)
  })

  process.on("uncaughtException" , err  => 
  {
    mongoose.disconnect()
  })
}) 

export interface IStore
{
  User : mongoose.Model<IUser>,
  connection : typeof mongoose
}

export default connectDB