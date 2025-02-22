import { redis } from '@/redis/client'

interface GetSubscribedInviteClicksParams {
  subscriberId: string
}

export async function getSubscribedInviteClicks({
  subscriberId,
}: GetSubscribedInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
