'use client';

import { cn } from '@/lib/utils';
import { motion } from "motion/react"
import { Star } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'bg-green-300/10 p-1 py-0.5 font-bold text-green-300',
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4',
        // theme styles
        'border-border bg-card/50 border shadow-sm',
        // hover effect
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
        className,
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-green-400 text-green-500" />
          <Star className="size-4 fill-green-400 text-green-500" />
          <Star className="size-4 fill-green-400 text-green-500" />
          <Star className="size-4 fill-green-400 text-green-500" />
          <Star className="size-4 fill-green-400 text-green-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ''}
          alt={name}
          className="size-10 rounded-full ring-1 ring-green-500/20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    name: 'Mark Reynolds',
    role: 'Family Farmer, Iowa',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    description: (
      <p>
        Before Sprout Society, small farmers like me had limited access to
        consistent buyers.{' '}
        <Highlight>
          Now, I’m connected with local food companies and restaurants that
          value sustainable sourcing.
        </Highlight>{' '}
        It’s made a huge difference in my farm’s stability and income.
      </p>
    ),
  },
  {
    name: 'Jessica Miller',
    role: 'Sustainability Lead at GreenLeaf Foods',
    img: 'https://randomuser.me/api/portraits/women/33.jpg',
    description: (
      <p>
        Sprout Society has completely changed how we partner with growers.{' '}
        <Highlight>
          Their platform helps us source responsibly and support regenerative
          farming at scale.
        </Highlight>{' '}
        It’s the missing link we needed between business and agriculture.
      </p>
    ),
  },
  {
    name: 'Daniel Carter',
    role: 'CEO at AgroConnect Solutions',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: (
      <p>
        Working with Sprout Society has helped us reach hundreds of farmers
        across the Midwest.{' '}
        <Highlight>
          The transparency and collaboration tools make partnerships efficient
          and fair.
        </Highlight>{' '}
        It’s transforming the agri-business landscape in the U.S.
      </p>
    ),
  },
  {
    name: 'Ava Thompson',
    role: 'Procurement Director at Nature’s Harvest Market',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: (
      <p>
        Finding reliable local producers was always a challenge — until we found
        Sprout Society.{' '}
        <Highlight>
          Their verified farmer network ensures top-quality produce and ethical
          sourcing every time.
        </Highlight>{' '}
        It’s helped us strengthen our farm-to-table promise.
      </p>
    ),
  },
  {
    name: 'Brandon Lee',
    role: 'Co-founder, PureSoil Organics (California)',
    img: 'https://randomuser.me/api/portraits/men/55.jpg',
    description: (
      <p>
        We used Sprout Society to connect with distributors and small grocers in
        our area.{' '}
        <Highlight>
          Sales have grown 35% since joining, and we’ve reduced waste through
          better coordination.
        </Highlight>{' '}
        It’s a game-changer for small organic farms like ours.
      </p>
    ),
  },
  {
    name: 'Emily Rogers',
    role: 'Agricultural Policy Consultant, Washington D.C.',
    img: 'https://randomuser.me/api/portraits/women/67.jpg',
    description: (
      <p>
        Sprout Society represents what the future of agriculture should look
        like.{' '}
        <Highlight>
          It creates economic opportunity while promoting sustainability and
          rural resilience.
        </Highlight>{' '}
        Their model is both practical and visionary.
      </p>
    ),
  },
  {
    name: 'Noah Johnson',
    role: 'Operations Manager at FarmDirect Supply Co.',
    img: 'https://randomuser.me/api/portraits/men/78.jpg',
    description: (
      <p>
        We rely on Sprout Society to manage supplier relationships across
        several states.{' '}
        <Highlight>
          The data insights and communication tools have streamlined our
          logistics and improved quality control.
        </Highlight>{' '}
        It’s become an essential part of our operations.
      </p>
    ),
  },
  {
    name: 'Sophia Garcia',
    role: 'Food Systems Advocate, New York',
    img: 'https://randomuser.me/api/portraits/women/89.jpg',
    description: (
      <p>
        Sprout Society connects local farms with urban markets in a meaningful
        way.{' '}
        <Highlight>
          It’s not just a platform — it’s building a more equitable and
          sustainable food system.
        </Highlight>{' '}
        The impact on community resilience is incredible.
      </p>
    ),
  },
  {
    name: 'Ethan Brooks',
    role: 'AgriTech Founder at CropSense',
    img: 'https://randomuser.me/api/portraits/men/92.jpg',
    description: (
      <p>
        Partnering with Sprout Society allowed us to pilot new technologies with
        real farmers.{' '}
        <Highlight>
          Their network accelerates innovation and helps bring solutions to
          market faster.
        </Highlight>{' '}
        It’s a powerful ecosystem for collaboration.
      </p>
    ),
  },
  {
    name: 'Olivia Nguyen',
    role: 'Director of Community Programs, FarmForward Initiative',
    img: 'https://randomuser.me/api/portraits/women/29.jpg',
    description: (
      <p>
        Sprout Society helps us connect donors, farmers, and food organizations
        effortlessly.{' '}
        <Highlight>
          It’s enabling real progress toward sustainable food access in rural
          and urban communities.
        </Highlight>{' '}
        This is what modern agriculture partnerships should look like.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="relative container mx-auto py-10">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-green-400 font-header mb-4 text-center text-3xl leading-[1.2] font-bold">
          What Our Members Are Saying
        </h2>
        <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-center font-content text-lg font-medium text-balance">
          Business sector, investors and farmers are excited to be have the opportunity to work with {" "}
          <span className="font-semibold text-green-500">Sprout Society</span>
        </h3>
      </motion.div>

      <div className="relative mt-6 max-h-[50vh] overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  '[--duration:60s]': i === 1,
                  '[--duration:30s]': i === 2,
                  '[--duration:70s]': i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
      </div>
    </section>
  );
}

