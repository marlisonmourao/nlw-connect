import { redis } from '@/redis/client'

interface GetSubscribeRankingPositionParams {
  subscribedId: string
}

export async function getSubscribeRankingPosition({
  subscribedId,
}: GetSubscribeRankingPositionParams) {
  const rank = await redis.zrevrank('referral:ranking', subscribedId)

  if (rank === null) {
    return { position: null }
  }

  return {
    position: rank + 1,
  }
}
