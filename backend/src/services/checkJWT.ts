import { FastifyLoggerInstance, FastifyPluginAsync, FastifyRequest } from "fastify";
import fp from "fastify-plugin";
import { RouteGenericInterface } from "fastify/types/route";
import { IncomingMessage, Server } from "http";


const verifyToken : FastifyPluginAsync = fp(async(fastify , options) => 
{
  fastify.decorate("auth" , async(request : Req) => 
  {
    try {
      await request.jwtVerify()
    } catch (error) {
      console.error({ error })

      throw fastify.httpErrors.unauthorized("Invalid Token")
    }
  })
})


export default verifyToken

type Req = FastifyRequest<RouteGenericInterface, Server, IncomingMessage, unknown, FastifyLoggerInstance>
export interface IPayload { userId : string }
export interface ITokenUser { userId : true , iat : number , exp : number }
export type CheckJWT = (req : Req) => Promise<void>
