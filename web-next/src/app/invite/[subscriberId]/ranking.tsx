import Image from 'next/image'

import { getRanking } from '@/http/api'

import cooper from '@/assets/medal-cooper.svg'
import gold from '@/assets/medal-gold.svg'
import silver from '@/assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-xl text-gray-200 leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={rank.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {rank.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {rank.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  width={40}
                  height={40}
                  alt=""
                  className="absolute top-3 right-3"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  src={silver}
                  width={40}
                  height={40}
                  alt=""
                  className="absolute top-3 right-3"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  src={cooper}
                  width={40}
                  height={40}
                  alt=""
                  className="absolute top-3 right-3"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
