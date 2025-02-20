import { getSubscribeRankingPosition } from '@/services/get-subscribe-ranking-position'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const getSubscribePositionRouteRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribes/:subscribedId/ranking/position',
      {
        schema: {
          summary: 'Get subscribed rank position',
          tags: ['referral'],
          params: z.object({
            subscribedId: z.string(),
          }),
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async request => {
        const { subscribedId } = request.params

        const { position } = await getSubscribeRankingPosition({
          subscribedId,
        })

        return { position }
      }
    )
  }
