import { getSubscribeInvitesCount } from '@/services/get-subscribe-invites-count'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const getSubscribeInvitesCountRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribes/:subscribedId/ranking/count',
      {
        schema: {
          summary: 'Get subscribed invite count',
          tags: ['referral'],
          params: z.object({
            subscribedId: z.string(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { subscribedId } = request.params

        const { count } = await getSubscribeInvitesCount({
          subscribedId,
        })

        return { count }
      }
    )
  }
