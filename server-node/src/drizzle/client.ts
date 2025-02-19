import { subscriptions } from '@/drizzle/schema/subscriptions'
import { env } from '@/env'
import postgres from 'postgres'

import { drizzle } from 'drizzle-orm/postgres-js'

export const pg = postgres(env.POSTGRES_URL)
export const db = drizzle(pg, {
  schema: {
    subscriptions,
  },
})
