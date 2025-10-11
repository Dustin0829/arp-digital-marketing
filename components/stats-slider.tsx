"use client"

export function StatsSlider() {
  const stats = [
    "6-7 FIGURES REVENUE GENERATED",
    "+73.54% PURCHASES INCREASED",
    "MILLION USERS REACHED",
    "TRUSTED BY MULTIPLE ACCOUNTS"
  ]

  const duplicatedStats = [...stats, ...stats, ...stats]

  return (
    <div className="relative overflow-hidden bg-red-800 py-3">
      <div className="flex animate-scroll-slow">
        {duplicatedStats.map((stat, index) => (
          <div
            key={`${stat}-${index}`}
            className="flex-shrink-0 px-8 text-white font-bold text-sm whitespace-nowrap"
          >
            {stat}
          </div>
        ))}
      </div>
    </div>
  )
}
