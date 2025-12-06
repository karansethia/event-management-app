import Header from '@/components/header'
import PricingCard from '@/components/pricing-card'
import React from 'react'

const pricingPlans = [
  {
    title: "Silver Member",
    price: "$50",
    link: "https://buy.stripe.com/test_dRm6oJ475cue7mDgJN0Ny00",
    frequency: "/month",
    description: "Membership for small farmers and businesses looking to shine in front of the world",
    features: ["Access to all events ( 1 visitor only )", "Recieve Updates via email", "Farmer to business connection and consultation"],
    cta: "Subscibe Now"
  },
  {
    title: "Gold Member",
    price: "$100",
    link: "https://buy.stripe.com/test_14A00l6fd3XIdL179d0Ny01?prefilled_email=kk@gg.com&prefilled_full_name=kohn",
    frequency: "/month",
    description: "Membership for farmers and businesses who are ready for the next level",
    features: ["Access to all events and presentations", "VIP Seat in inauguration and other ceremonies", "Stall booking in any event", "Recieve Updates via email", "Farmer to business connection and consultation"],
    cta: "Subscibe Now"
  },
]

export default async function MemberRegistrationPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const {email} = await searchParams;

  return (
    <main className='w-full relative h-screen overflow-y-scroll scrollbar-hidden scroll-smooth'>
      <Header />
      <section className='w-full relative snap-center snap-mandatory flex flex-col lg:flex-row items-start space-y-10 py-5 max-w-7xl mx-auto max-xl:px-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          {pricingPlans.map((pr, index) => (
            <PricingCard
              features={pr.features}
              link={pr.link}
              title={pr.title}
              pricing={pr.price}
              description={pr.description}
              key={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

