import { getSubscribedInviteClicks } from '@/services/get-subscribed-invite-clicks'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const getSubscribedInviteClicksRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribes/:subscribedId/ranking/clicks',
      {
        schema: {
          summary: 'Get subscribed invite clicks count',
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
      async request => {
        const { subscribedId } = request.params

        const { count } = await getSubscribedInviteClicks({
          subscribedId,
        })

        return { count }
      }
    )
  }
