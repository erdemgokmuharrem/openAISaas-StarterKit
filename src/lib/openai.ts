import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export const OPENAI_MODELS = {
  CHAT: 'gpt-3.5-turbo',
  IMAGE: 'dall-e-3'
}
