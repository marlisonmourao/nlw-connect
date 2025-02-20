import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'

import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'

import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { accessInviteLinkRoute } from './routes/access-invite-link'
import { getRankingRoute } from './routes/get-ranking-route'
import { getSubscribeInvitesCountRoute } from './routes/get-subscribe-invites-count-route'
import { getSubscribePositionRouteRoute } from './routes/get-subscribe-ranking-position-route'
import { getSubscribedInviteClicksRoute } from './routes/get-subscribed-invite-clicks-route'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: true,
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW Connect',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscribedInviteClicksRoute)
app.register(getSubscribeInvitesCountRoute)
app.register(getSubscribePositionRouteRoute)
app.register(getRankingRoute)

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server Running!')
})
