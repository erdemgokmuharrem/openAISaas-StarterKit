import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI SaaS - OpenAI Entegrasyonu',
  description: 'AI gücü ile chat, görsel üretimi ve özel prompt\'lar oluşturun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}