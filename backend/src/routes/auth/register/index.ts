import { FastifyPluginAsync } from "fastify";
import { hashPassword } from "../../../utils/password";
import { RegisterBody } from "./types";

const register : FastifyPluginAsync = async(fastify , opts) => 
{
  fastify.post<{
    Body : RegisterBody
  }>("/" ,  async(request , reply) => 
  {
    const { body : userInfo } = request
    const { email , password , username } = userInfo

    if(!email || !password || !username)
      throw fastify.httpErrors.badRequest("We lack information")

    const hashedPassword = await hashPassword(password)

    userInfo.password = hashedPassword

    try {
      await fastify.store.User.create(userInfo)

      return reply.status(200).send("The user has been create succesfully")
    } catch (error) {
      throw fastify.httpErrors.createError({
        name : "Cannot register this user",
        message : error
      });
    }
  })
}

export default register