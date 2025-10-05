# AI SaaS Starter Kit (Next.js + OpenAI)

## 🎯 Amaç
Kullanıcının kendi OpenAI API anahtarını `.env` dosyasına ekleyerek, anında çalıştırabileceği **AI SaaS Starter Kit** oluşturmak.  
Proje; modern Next.js altyapısı, Stripe abonelik sistemi, kullanıcı auth yapısı ve prompt tabanlı AI API entegrasyonunu içerir.

---

## 🧠 Teknoloji Stack
- **Frontend/Backend:** Next.js (App Router, TypeScript)
- **Database:** Prisma + PostgreSQL
- **Auth:** NextAuth.js (Google + Email)
- **Payments:** Stripe (Free + Pro Plan)
- **AI:** OpenAI API (Chat & Completion endpoints)
- **UI:** TailwindCSS + shadcn/ui + React Icons
- **State Management:** Zustand
- **Deployment:** Vercel
- **Docs:** README.md + .env.example

---

## ⚙️ Özellikler

### 1️⃣ Authentication
- NextAuth.js (Google + Email/Password)
- “Forgot password” akışı
- JWT token tabanlı session yönetimi
- Kullanıcı profili & logout

### 2️⃣ Subscription & Payments
- Stripe entegrasyonu
- Free + Pro Plan sistemi
- Subscription webhook kontrolü (`/api/webhooks/stripe`)
- Dashboard’da “Upgrade Plan” butonu
- Abonelik statüsüne göre erişim kontrolü (middleware)

### 3️⃣ AI Features
- OpenAI API ile Chat ve Prompt endpoint’leri
- Örnek sayfalar:
  - **Chat Playground:** ChatGPT benzeri arayüz
  - **Image Generator:** OpenAI DALL·E entegrasyonu
  - **Prompt Templates:** Kullanıcıların hazır prompt setlerini kaydetmesi
- Kullanıcı prompt geçmişi (Firestore veya PostgreSQL üzerinden kaydedilir)

### 4️⃣ Dashboard
- Sidebar + Header layout
- Kullanıcı bilgisi + plan durumu
- CRUD örneği: “Saved Prompts”
- Responsive & Light/Dark destekli

### 5️⃣ Deployment & Docs
- `.env.example` dosyası (OpenAI + Stripe + DB + Auth keys)
- Vercel deploy testi
- Stripe test mode setup guide
- OpenAI API key setup guide
- README.md setup & run guide

---

## 📁 Klasör Yapısı
root/
│── src/
│ ├── app/
│ │ ├── (auth)/
│ │ ├── (dashboard)/
│ │ ├── api/
│ │ │ ├── auth/
│ │ │ ├── openai/
│ │ │ ├── stripe/
│ ├── components/
│ ├── lib/
│ │ ├── auth.ts
│ │ ├── stripe.ts
│ │ ├── openai.ts
│ ├── prisma/
│ ├── styles/
│── prisma/schema.prisma
│── .env.example
│── package.json
│── README.md
│── checklist.md


---

## 🧩 Teslim Edilecekler
- ✅ Tüm backend + frontend tek Next.js projesinde
- ✅ OpenAI Chat & Image endpointleri
- ✅ Stripe Free + Pro planlar
- ✅ Auth sistemi (NextAuth)
- ✅ Dashboard + CRUD örneği
- ✅ README.md + .env.example + Checklist.md
- ✅ Deploy test edilmiş (Vercel)
