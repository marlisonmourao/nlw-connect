import { db } from '@/drizzle/client'
import { subscriptions } from '@/drizzle/schema/subscriptions'

interface SubscribedToEventParams {
  name: string
  email: string
}

export async function subscribeToEvent({
  name,
  email,
}: SubscribedToEventParams) {
  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  const subscribed = result[0]

  return {
    subscribedId: subscribed.id,
  }
}
