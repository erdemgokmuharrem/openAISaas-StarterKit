'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Image, Loader2, Download, Crown } from 'lucide-react'
import Link from 'next/link'

export default function ImagePage() {
  const [prompt, setPrompt] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/openai/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await response.json()
      if (data.imageUrl) {
        setImageUrl(data.imageUrl)
      }
    } catch (error) {
      console.error('Image generation error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Görsel Üretimi</h1>
          <p className="text-muted-foreground">
            Hayal ettiğiniz görselleri AI ile oluşturun
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Görsel Oluştur</CardTitle>
              <CardDescription>
                Detaylı bir açıklama yazın ve AI görselinizi oluştursun
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-4">
                <div>
                  <Label htmlFor="prompt">Görsel Açıklaması</Label>
                  <Input
                    id="prompt"
                    placeholder="Örn: A beautiful sunset over mountains..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Oluşturuluyor...
                    </>
                  ) : (
                    <>
                      <Image className="mr-2 h-4 w-4" />
                      Görsel Oluştur
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sonuç</CardTitle>
              <CardDescription>
                AI tarafından oluşturulan görseliniz
              </CardDescription>
            </CardHeader>
            <CardContent>
              {imageUrl ? (
                <div className="space-y-4">
                  <img
                    src={imageUrl}
                    alt="Generated image"
                    className="w-full rounded-lg"
                  />
                  <Button asChild className="w-full">
                    <a href={imageUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      İndir
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Image className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p>Görsel oluşturmak için yukarıdaki formu kullanın</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>İpuçları</CardTitle>
            <CardDescription>
              Daha iyi sonuçlar için bu önerileri takip edin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Detaylı açıklamalar yazın (renk, stil, atmosfer)</li>
              <li>• Sanat tarzı belirtin (realistic, cartoon, abstract)</li>
              <li>• Kompozisyon detayları ekleyin (close-up, wide shot)</li>
              <li>• Işık ve renk paleti belirtin</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}