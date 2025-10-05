import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json()
    
    if (!priceId) {
      return NextResponse.json({ error: 'Price ID is required' }, { status: 400 })
    }

    // Simple mock response for development
    return NextResponse.json({ 
      url: 'https://checkout.stripe.com/mock-checkout-session' 
    })
  } catch (error) {
    console.error('Checkout API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}