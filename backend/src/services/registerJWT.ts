import fastifyJwt from "@fastify/jwt";
import fp from "fastify-plugin";

const registerJWT = fp((fastify) => 
{
  const JWT_SECRET = process.env.JWT_SECRET

  if(!JWT_SECRET)
  {
    fastify.log.error("JWT SECRET NOT FOUND")
    process.exit(1)
  }

  fastify.register(fastifyJwt , {
    secret: JWT_SECRET
  }) 
})

export default registerJWT