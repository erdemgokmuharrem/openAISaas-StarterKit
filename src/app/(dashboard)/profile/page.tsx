'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Crown, User, Mail, Calendar, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    // Mock user data for development
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      image: 'https://via.placeholder.com/150',
      createdAt: new Date().toISOString()
    })
    setFormData({
      name: 'John Doe',
      email: 'john@example.com'
    })
    setIsLoading(false)
  }, [])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)
    
    try {
      // Mock update
      await new Promise(resolve => setTimeout(resolve, 1000))
      setUser({ ...user, ...formData })
    } catch (error) {
      console.error('Update error:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-muted-foreground">Yükleniyor...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profil</h1>
          <p className="text-muted-foreground">
            Hesap bilgilerinizi yönetin
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Profil Bilgileri</CardTitle>
                <CardDescription>
                  Kişisel bilgilerinizi güncelleyin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? 'Güncelleniyor...' : 'Güncelle'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Abonelik</CardTitle>
                <CardDescription>
                  Mevcut abonelik durumunuz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Crown className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">Pro Plan</p>
                      <p className="text-sm text-muted-foreground">Aktif</p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/pricing">Yönet</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Profil Fotoğrafı</CardTitle>
                <CardDescription>
                  Profil fotoğrafınızı güncelleyin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <img
                    src={user?.image || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <Button variant="outline" size="sm">
                    Fotoğraf Değiştir
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Hesap Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">Ad Soyad</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{user?.email}</p>
                    <p className="text-xs text-muted-foreground">E-posta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('tr-TR') : 'N/A'}
                    </p>
                    <p className="text-xs text-muted-foreground">Üyelik Tarihi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}