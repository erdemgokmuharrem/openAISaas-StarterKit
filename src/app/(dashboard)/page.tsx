'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageSquare, Image, FileText, Crown } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Hoş geldin, {session?.user?.name || 'Kullanıcı'}! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          AI gücünü keşfetmeye hazır mısın? Aşağıdaki özelliklerden birini seçerek başla.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-x-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <CardTitle>AI Chat</CardTitle>
            </div>
            <CardDescription>
              OpenAI GPT ile sohbet et, sorular sor, yaratıcı içerik üret
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/chat">
              <Button className="w-full">Chat'e Git</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-x-2">
              <Image className="h-5 w-5 text-purple-500" />
              <CardTitle>Görsel Üretimi</CardTitle>
            </div>
            <CardDescription>
              DALL-E ile yaratıcı görseller oluştur (Pro plan gerekli)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/image">
              <Button className="w-full" variant="outline">Görsel Oluştur</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-x-2">
              <FileText className="h-5 w-5 text-green-500" />
              <CardTitle>Prompt'larım</CardTitle>
            </div>
            <CardDescription>
              Kaydettiğin prompt'ları yönet ve yeniden kullan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/prompts">
              <Button className="w-full" variant="outline">Prompt'ları Gör</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Günlük Kullanım</CardTitle>
            <CardDescription>
              Bugün kullandığın AI istekleri
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-indigo-600">0 / 5</div>
            <p className="text-sm text-gray-500 mt-2">
              Ücretsiz plan limiti: Günlük 5 istek
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan Durumu</CardTitle>
            <CardDescription>
              Mevcut abonelik planın
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-x-2">
              <Crown className="h-5 w-5 text-yellow-500" />
              <span className="text-lg font-semibold">Free Plan</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Pro plana yükseltmek için <Link href="/pricing" className="text-indigo-600 hover:underline">buraya tıkla</Link>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Son Aktiviteler</CardTitle>
          <CardDescription>
            Son kullandığın AI özellikleri
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>Henüz aktivite yok</p>
            <p className="text-sm">AI chat'e başlayarak ilk aktiviteni oluştur!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
