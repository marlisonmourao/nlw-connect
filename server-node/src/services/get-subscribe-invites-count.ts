import { redis } from '@/redis/client'

interface GetSubscribeInvitesCountParams {
  subscribedId: string
}

export async function getSubscribeInvitesCount({
  subscribedId,
}: GetSubscribeInvitesCountParams) {
  const count = await redis.zscore('referral:ranking', subscribedId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
