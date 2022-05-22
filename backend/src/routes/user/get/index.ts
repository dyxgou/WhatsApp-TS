import { FastifyPluginAsync } from 'fastify'

const getUser : FastifyPluginAsync = async(fastify , options) => 
{
  fastify.post("/" , { onRequest : fastify.auth } , async(request , reply) => 
  {
    const { userId } = request.user

    const user = await fastify.store.User.findById(userId , {
      password : false , _id : false
    })
    
    if(!user)
      throw fastify.httpErrors.notFound("User not found")

    return reply.status(200).send({ user })
  })  
}

export default getUser