import { db } from '@/drizzle/client'
import { subscriptions } from '@/drizzle/schema/subscriptions'
import { redis } from '@/redis/client'
import { eq } from 'drizzle-orm'

interface SubscribedToEventParams {
  name: string
  email: string
  referrerId?: string | null
}

export async function subscribeToEvent({
  name,
  email,
  referrerId,
}: SubscribedToEventParams) {
  const subscribes = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscribes.length > 0) {
    return {
      subscribedId: subscribes[0].id,
    }
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  if (referrerId) {
    await redis.zincrby('referral:ranking', 1, referrerId)
  }

  const subscribed = result[0]

  return {
    subscribedId: subscribed.id,
  }
}
