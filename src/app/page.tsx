import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">AI SaaS</div>
          <div className="space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Giriş Yap</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Kayıt Ol</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI ile Güçlendirilmiş SaaS Uygulaması
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          OpenAI entegrasyonu ile chat, görsel üretimi ve özel prompt'lar oluşturun. 
          Ücretsiz başlayın, ihtiyacınıza göre ölçeklendirin.
        </p>
        <div className="space-x-4">
          <Link href="/auth/register">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Ücretsiz Başla
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline">
              Fiyatlandırma
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Özellikler</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>🤖 AI Chat</CardTitle>
              <CardDescription>
                OpenAI GPT ile güçlü sohbet deneyimi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Günlük 5 ücretsiz AI isteği ile başlayın. Pro plan ile sınırsız kullanım.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Görsel Üretimi</CardTitle>
              <CardDescription>
                DALL-E ile yaratıcı görseller oluşturun
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Pro plan ile sınırsız görsel üretimi. Hayal gücünüzü serbest bırakın.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📝 Özel Prompt'lar</CardTitle>
              <CardDescription>
                Kendi prompt şablonlarınızı kaydedin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Sık kullandığınız prompt'ları kaydedin ve tekrar kullanın.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hemen Başlayın</h2>
          <p className="text-xl mb-8 opacity-90">
            AI gücünü keşfedin. Ücretsiz hesap oluşturun ve hemen deneyin.
          </p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary">
              Ücretsiz Hesap Oluştur
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AI SaaS. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}