import type { FastifyInstance } from 'fastify'
import { UserRouter } from './routers/user-router'

const userRouter = new UserRouter()
export async function configRoutes(app: FastifyInstance) {
  app.register(userRouter.routes, { prefix: '/users' })
}
