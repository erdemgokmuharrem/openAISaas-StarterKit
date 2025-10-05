'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Edit, Trash2, Copy, Check } from 'lucide-react'

interface Prompt {
  id: string
  title: string
  content: string
  category: string
  createdAt: string
}

export default function PromptsPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPrompt, setEditingPrompt] = useState<Prompt | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'custom'
  })
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    fetchPrompts()
  }, [])

  const fetchPrompts = async () => {
    try {
      const response = await fetch('/api/prompts')
      if (response.ok) {
        const data = await response.json()
        setPrompts(data)
      }
    } catch (error) {
      console.error('Error fetching prompts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.content) return

    try {
      if (editingPrompt) {
        // Update existing prompt
        const response = await fetch(`/api/prompts/${editingPrompt.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          fetchPrompts()
          resetForm()
        }
      } else {
        // Create new prompt
        const response = await fetch('/api/prompts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          fetchPrompts()
          resetForm()
        }
      }
    } catch (error) {
      console.error('Error saving prompt:', error)
    }
  }

  const handleEdit = (prompt: Prompt) => {
    setEditingPrompt(prompt)
    setFormData({
      title: prompt.title,
      content: prompt.content,
      category: prompt.category
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu prompt\'u silmek istediğinizden emin misiniz?')) return

    try {
      const response = await fetch(`/api/prompts/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchPrompts()
      }
    } catch (error) {
      console.error('Error deleting prompt:', error)
    }
  }

  const handleCopy = async (content: string, id: string) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (error) {
      console.error('Error copying to clipboard:', error)
    }
  }

  const resetForm = () => {
    setFormData({ title: '', content: '', category: 'custom' })
    setEditingPrompt(null)
    setIsDialogOpen(false)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
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
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Prompt Kütüphanem</h1>
          <p className="text-muted-foreground">
            AI ile daha etkili konuşmak için özel prompt'larınızı kaydedin
          </p>
        </div>

        <div className="mb-6">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="mr-2 h-4 w-4" />
                Yeni Prompt
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {editingPrompt ? 'Prompt Düzenle' : 'Yeni Prompt'}
                </DialogTitle>
                <DialogDescription>
                  {editingPrompt ? 'Prompt\'unuzu düzenleyin' : 'Yeni bir prompt oluşturun'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Başlık</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Prompt başlığı"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Kategori</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Özel</SelectItem>
                      <SelectItem value="writing">Yazı</SelectItem>
                      <SelectItem value="coding">Kodlama</SelectItem>
                      <SelectItem value="creative">Yaratıcı</SelectItem>
                      <SelectItem value="business">İş</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="content">Prompt İçeriği</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Prompt içeriğinizi yazın..."
                    rows={6}
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    İptal
                  </Button>
                  <Button type="submit">
                    {editingPrompt ? 'Güncelle' : 'Oluştur'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {prompts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground mb-4">Henüz prompt eklenmemiş</p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                İlk Prompt'unu Ekle
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {prompts.map((prompt) => (
              <Card key={prompt.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{prompt.title}</CardTitle>
                      <CardDescription className="capitalize">
                        {prompt.category}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(prompt.content, prompt.id)}
                      >
                        {copiedId === prompt.id ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(prompt)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(prompt.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {prompt.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}