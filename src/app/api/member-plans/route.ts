import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function GET() {
  const products = await stripe.products.list()

  const prices = await stripe.prices.list({
    product: products.data[0].id
  })

  console.log(products)

  return NextResponse.json(prices)
}
