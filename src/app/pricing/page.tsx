'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (priceId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Fiyatlandırma</h1>
        <p className="text-xl text-muted-foreground mb-12">
          AI gücünü keşfetmek için size uygun planı seçin
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Free Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Ücretsiz</CardTitle>
              <CardDescription>
                AI deneyimini keşfetmek için
              </CardDescription>
              <div className="text-3xl font-bold">₺0<span className="text-sm font-normal">/ay</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  10 AI sohbet mesajı/ay
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  5 görsel üretimi/ay
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Temel prompt'lar
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Topluluk desteği
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/auth/login">Başla</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Pro</CardTitle>
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                  Popüler
                </span>
              </div>
              <CardDescription>
                Gelişmiş AI özellikleri için
              </CardDescription>
              <div className="text-3xl font-bold">₺99<span className="text-sm font-normal">/ay</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Sınırsız AI sohbet
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Sınırsız görsel üretimi
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Özel prompt'lar
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Öncelikli destek
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  API erişimi
                </li>
              </ul>
              <Button 
                className="w-full" 
                onClick={() => handleSubscribe('pro')}
                disabled={isLoading}
              >
                {isLoading ? 'İşleniyor...' : 'Pro\'ya Geç'}
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Kurumsal</CardTitle>
              <CardDescription>
                Büyük ekipler için özel çözümler
              </CardDescription>
              <div className="text-3xl font-bold">Özel<span className="text-sm font-normal">/ay</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Tüm Pro özellikler
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Özel AI modelleri
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Özel entegrasyonlar
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  7/24 destek
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  SLA garantisi
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="mailto:sales@example.com">İletişime Geç</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Sıkça Sorulan Sorular</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Fatura nasıl kesilir?</h3>
              <p className="text-muted-foreground">
                Aylık abonelikler otomatik olarak yenilenir. İstediğiniz zaman iptal edebilirsiniz.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hangi ödeme yöntemleri kabul edilir?</h3>
              <p className="text-muted-foreground">
                Kredi kartı, banka kartı ve PayPal ile ödeme yapabilirsiniz.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">İptal etmek istersem ne olur?</h3>
              <p className="text-muted-foreground">
                Aboneliğinizi istediğiniz zaman iptal edebilirsiniz. Mevcut dönem sonuna kadar erişiminiz devam eder.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Güvenlik nasıl sağlanıyor?</h3>
              <p className="text-muted-foreground">
                Tüm verileriniz SSL şifreleme ile korunur ve GDPR uyumludur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}