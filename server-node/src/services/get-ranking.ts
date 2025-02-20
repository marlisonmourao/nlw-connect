import { db } from '@/drizzle/client'
import { subscriptions } from '@/drizzle/schema/subscriptions'
import { redis } from '@/redis/client'
import { inArray } from 'drizzle-orm'

export async function getRanking() {
  const ranking = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')

  const subscribeIdAndScore: Record<string, number> = {}

  for (let i = 0; i < ranking.length; i += 2) {
    subscribeIdAndScore[ranking[i]] = Number.parseInt(ranking[i + 1])
  }

  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(inArray(subscriptions.id, Object.keys(subscribeIdAndScore)))

  const rankingWithScore = subscribers
    .map(subscribe => {
      return {
        id: subscribe.id,
        name: subscribe.name,
        score: subscribeIdAndScore[subscribe.id],
      }
    })
    .sort((a, b) => {
      return b.score - a.score
    })
  return { rankingWithScore }
}
