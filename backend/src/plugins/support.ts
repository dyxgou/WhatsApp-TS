import fastifyCors from '@fastify/cors'
import fp from 'fastify-plugin'
import checkJWT, { CheckJWT , IPayload , ITokenUser } from '../services/checkJWT'
import connectDB, { IStore } from '../services/connectDB'
import registerJWT from '../services/registerJWT'

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  void fastify.register(fastifyCors)
  void await fastify.register(connectDB)
  void fastify.register(registerJWT)
  void fastify.register(checkJWT)
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    store : IStore,
    auth : CheckJWT
  }
}

declare module '@fastify/jwt'
{
  interface FastifyJWT
  {
    paylaod : IPayload,
    user : ITokenUser
  }
}
