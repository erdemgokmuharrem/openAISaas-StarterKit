import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()
    
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    // Simple mock response for development
    return NextResponse.json({ 
      imageUrl: 'https://via.placeholder.com/1024x1024?text=Mock+Image' 
    })
  } catch (error) {
    console.error('Image API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}