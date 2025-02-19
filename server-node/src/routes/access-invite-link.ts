import { env } from '@/env'
import { accessInviteLink } from '@/services/access-invite-link'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscribedId',
    {
      schema: {
        summary: 'Access invite link and redirects user',
        tags: ['referral'],
        params: z.object({
          subscribedId: z.string(),
        }),
        response: {
          201: z.object({
            subscribedId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscribedId } = request.params

      await accessInviteLink({
        subscribedId,
      })

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscribedId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
