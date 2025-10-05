# AI SaaS Starter Kit - Kurallar

## Genel Kurallar
1. Kodlar **TypeScript** ile yazılmalı.
2. Her modül (auth, ai, stripe, user) kendi dizininde izole olmalı.
3. Agent hiçbir görevi yarım bırakmamalı.
4. Kullanıcı `.env` dosyasına key ekleyince proje direkt çalışmalı.
5. Deploy sonrası hiçbir manuel müdahale gerekmeden sistem çalışmalı.
6. UI sade, modern, Tailwind + shadcn/ui kombinasyonu kullanılmalı.
7. AI endpoint’leri güvenli olmalı (rate limit, auth middleware).

---

## Teknik Kurallar
- Framework: **Next.js (App Router)**
- Dil: **TypeScript**
- ORM: **Prisma + PostgreSQL**
- Auth: **NextAuth.js**
- Payments: **Stripe (Free + Pro plan)**
- AI: **OpenAI (Chat & Image endpointleri)**
- State: **Zustand**
- CSS: **TailwindCSS**
- UI: **shadcn/ui**
- Deployment: **Vercel**
- Docs: README.md + .env.example zorunlu
- Test: Tüm API endpoint’leri 200 response döndürmeli

---

## Auth Flow
- `/auth/register`
- `/auth/login`
- `/auth/forgot-password`
- `/auth/reset`
- `/dashboard/profile`
- `/api/auth/[...nextauth].ts`

---

## Subscription Flow
- `/pricing`
- `/api/stripe/checkout`
- `/api/webhooks/stripe`
- Middleware → Kullanıcının plan durumuna göre erişim kontrolü

---

## AI Flow
- `/api/openai/chat` → Chat endpoint
- `/api/openai/image` → Image generation endpoint
- Prompt geçmişi kullanıcıya özel kaydedilmeli.

---

## Deployment Kuralları
- `npm run build` → hatasız çalışmalı
- `.env` dosyası test edilmeli
- Stripe webhook test edilmiş olmalı
- Vercel deploy sonrası ilk yüklemede hata olmamalı
- OpenAI API limitleri test edilmeli

---

## Teslim Kontrol Listesi
- [ ] Auth flow tamam
- [ ] Stripe entegrasyonu test edildi
- [ ] OpenAI Chat + Image API çalışıyor
- [ ] CRUD demo tamam
- [ ] README hazır
- [ ] Deploy test edildi
