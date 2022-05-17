import { FastifyPluginAsync } from "fastify";
import { comparePassword } from "../../../utils/password";
import { LoginBody } from "./types";

const login : FastifyPluginAsync = async(fastify , options) =>
{
  fastify.post<{
    Body : LoginBody
  }>("/" , async(request , reply) =>  
  {
    const { email , password } = request.body

    if(!email || !password)
      throw fastify.httpErrors.badRequest("We lack information")

    const user = await fastify.store.User.findOne({ email } , {
      password : true
    })

    const isCorrectPassword = await comparePassword(password , user?.password)

    if(!isCorrectPassword || !user)
      throw fastify.httpErrors.unauthorized("The email or password is wrong")

    
  })
}

export default login
