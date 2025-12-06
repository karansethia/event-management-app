import { constructStripeEvent, getCurrentPlan, getCustomerEmail, handleError, recordSubscriptionEvent, resetSubscription, retrieveSubscription, updateSubscribedUser } from "@/lib/stripe-fn";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {

  const { event, error } = await constructStripeEvent(req, stripe)

  if (error || !event) return error;

  let customerEmail: string | null | undefined;
  let errors: string[] = [];
  let updates: string[] = [];

  try {
    switch (event.type) {
      case "customer.subscription.created":
        console.log(event.type, " catched")
        await handleSubscriptionCreated(event, updates);
        break;
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event, updates);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event, updates);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    return handleError(error, customerEmail, updates, errors);
  }

  return NextResponse.json({
    received: true,
    email: customerEmail,
    updates,
    errors,
  });

}

async function handleSubscriptionCreated(
  event: Stripe.Event,
  updates: string[]
) {
  const subscription = await retrieveSubscription(event, stripe);
  const customerEmail = getCustomerEmail(subscription);
  const currentPlan = getCurrentPlan(subscription);

  console.log(subscription, customerEmail, currentPlan)

  await updateSubscribedUser(customerEmail, subscription, currentPlan);
  await recordSubscriptionEvent(event, customerEmail);

  updates.push(
    `Created subscription for ${customerEmail} and recorded event ${event.id}`
  );
}

async function handleSubscriptionUpdated(
  event: Stripe.Event,
  updates: string[]
) {
  const subscription = await retrieveSubscription(event, stripe);
  const customerEmail = getCustomerEmail(subscription);
  const currentPlan = getCurrentPlan(subscription);

  await updateSubscribedUser(customerEmail, subscription, currentPlan);
  await recordSubscriptionEvent(event, customerEmail);

  updates.push(
    `Updated subscription details and recorded event ${event.id} for ${customerEmail}`
  );
}

async function handleSubscriptionDeleted(
  event: Stripe.Event,
  updates: string[]
) {
  const subscription = await retrieveSubscription(event, stripe);
  const customerEmail = getCustomerEmail(subscription);

  await resetSubscription(customerEmail);
  await recordSubscriptionEvent(event, customerEmail);

  updates.push(
    `Deleted subscription and recorded event ${event.id} for ${customerEmail}`
  );
}

