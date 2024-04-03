import { FastifyInstance } from 'fastify'
import { BadRequest } from './routes/_errors/bad-request'
import { ZodError } from 'zod'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (e, request, reply) => {
  if (e instanceof ZodError) {
    return reply.status(400).send({
      message: 'Error during validation',
      errors: e.flatten().fieldErrors,
    })
  }

  if (e instanceof BadRequest) {
    return reply.status(400).send({ message: e.message })
  }

  return reply.status(500).send({ message: 'Internal server error' })
}
