import { app } from './app'
import { env } from './env'
import { configRoutes } from './routes'

async function startServer() {
  try {
    await configRoutes(app)

    app
      .listen({ port: 3000 })
      .then(address => {
        console.log(`> Server is running on ${address}`)
        console.log(`> Documentation: ${address}/docs`)
      })
      .catch(error => {
        console.error(`> Error in server start: ${error}`)
      })
  } catch (error) {
    console.error(error)
  }
}

startServer()
