import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
})

export const STRIPE_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    features: [
      '5 AI requests per day',
      'Basic chat functionality',
      'Community support'
    ]
  },
  PRO: {
    name: 'Pro',
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    features: [
      'Unlimited AI requests',
      'Advanced chat & image generation',
      'Priority support',
      'Custom prompts'
    ]
  }
}
