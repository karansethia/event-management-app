import { CheckIcon } from "lucide-react"
import Link from "next/link"

type Props = {
  title: string,
  pricing: string,
  link: string,
  description: string,
  features: string[]
}

export default function PricingCard({ description, features, link, pricing, title }: Props) {
  return (
    <div className="bg-gray-100 dark:bg-[#262626] rounded-3xl p-2 shadow-[0_12px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_50px_-15px_rgba(0,0,0,0.25)] border border-gray-200/60 dark:border-gray-700/60 flex flex-col">
      <div className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-8 mb-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{title}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">{description}</p>
        <div className="flex items-baseline mb-8">
          <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tighter">{pricing}</span>
          <span className="text-gray-400 dark:text-gray-500 text-lg ml-1">/ month</span>
        </div>
        <Link href={link}>
          <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_20px_-5px_rgba(255,255,255,0.2)]">
            Subscribe
          </button>
        </Link>
      </div>
      <div className="bg-gray-100 dark:bg-[#262626] px-6 pb-6 pt-4 flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-auto">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckIcon className="w-4 h-4 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

