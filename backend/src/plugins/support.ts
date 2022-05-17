import fastifyCors from '@fastify/cors'
import fp from 'fastify-plugin'
import connectDB, { IStore } from '../services/connectDB'

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  void fastify.register(fastifyCors)
  void await fastify.register(connectDB)
  
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    store : IStore
  }
}
