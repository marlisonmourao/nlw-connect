import { redis } from '@/redis/client'

interface GetSubscribedInviteClicksParams {
  subscribedId: string
}

export async function getSubscribedInviteClicks({
  subscribedId,
}: GetSubscribedInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscribedId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
