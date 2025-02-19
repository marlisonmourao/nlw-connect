import { redis } from '@/redis/client'

interface AccessInviteLinkParams {
  subscribedId: string
}

export async function accessInviteLink({
  subscribedId,
}: AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscribedId, 1)
}
