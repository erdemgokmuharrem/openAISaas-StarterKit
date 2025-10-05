# AI SaaS Starter Kit

A comprehensive, production-ready starter kit for building AI-powered SaaS applications with Next.js, OpenAI, Stripe, and NextAuth.js.

## 🚀 Features

### 🔐 Authentication
- **NextAuth.js** integration with Google OAuth and Email providers
- Secure session management
- Protected routes with middleware
- User profile management

### 💳 Subscription & Payments
- **Stripe** integration for subscription management
- Free and Pro plan system
- Secure checkout sessions
- Webhook handling for subscription events
- Plan upgrade/downgrade functionality

### 🤖 AI Features
- **OpenAI Chat API** integration for conversational AI
- **OpenAI Image Generation** with DALL-E
- Rate limiting based on subscription plans
- Usage tracking and analytics

### 📊 Dashboard
- Responsive sidebar layout
- Navigation tabs: Home, Chat, Image, Prompts, Profile
- Usage statistics and analytics
- Plan status indicators

### 📝 CRUD Operations
- Save, edit, and manage AI prompts
- Category-based organization
- Modal dialog interface
- Search and filter functionality

### 🎨 Modern UI/UX
- **TailwindCSS** for styling
- **shadcn/ui** component library
- Responsive design for all devices
- Loading states and error handling
- Toast notifications

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **AI**: OpenAI API
- **UI**: shadcn/ui, Lucide React Icons
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/erdemgokmuharrem/openAISaas-StarterKit.git
cd openAISaas-StarterKit
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment example file and configure your variables:

```bash
cp env.example .env.local
```

### 4. Configure Environment Variables

Open `.env.local` and add your API keys:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email Provider (Optional)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_PRO_PLAN_PRICE_ID="price_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### 5. Database Setup

Initialize the database with Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

### 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 🔧 API Keys Setup

### OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account and navigate to API Keys
3. Generate a new API key
4. Add it to your `.env.local` file

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to `.env.local`

### Stripe Setup
1. Create account at [Stripe](https://stripe.com/)
2. Get your API keys from the dashboard
3. Create a product and price for your Pro plan
4. Set up webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
5. Add webhook secret to `.env.local`

### PostgreSQL Database
1. Install PostgreSQL locally or use a cloud service
2. Create a new database
3. Add the connection string to `DATABASE_URL` in `.env.local`

## 📱 Usage Guide

### Authentication
- **Google Login**: Click "Login with Google" to authenticate via Google OAuth
- **Email Login**: Use email/password for traditional authentication
- **Registration**: New users can register with email or Google

### Subscription Plans

#### Free Plan
- 10 chat messages per day
- 2 image generations per day
- 5 saved prompts
- Basic features

#### Pro Plan ($10/month)
- 100 chat messages per day
- 20 image generations per day
- 50 saved prompts
- Priority support
- Advanced features

### AI Features

#### Chat Interface
1. Navigate to `/dashboard/chat`
2. Type your message in the input field
3. Press Enter or click Send
4. AI will respond with helpful information

#### Image Generation
1. Go to `/dashboard/image`
2. Enter a descriptive prompt
3. Click "Generate Image"
4. Download the generated image

#### Prompt Management
1. Visit `/dashboard/prompts`
2. Click "Add New Prompt"
3. Fill in title, content, and category
4. Save for future use
5. Edit or delete existing prompts

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Configure Environment Variables**:
   - Add all environment variables in Vercel dashboard
   - Update `NEXTAUTH_URL` to your production domain
   - Update Stripe webhook URL to production

3. **Database Setup**:
   - Use a production PostgreSQL database (Supabase, PlanetScale, or Railway)
   - Update `DATABASE_URL` in Vercel environment variables

4. **Deploy**:
   ```bash
   vercel --prod
   ```

### Environment Variables for Production

```env
DATABASE_URL="postgresql://user:password@host:port/database"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
GOOGLE_CLIENT_ID="your-production-google-client-id"
GOOGLE_CLIENT_SECRET="your-production-google-client-secret"
OPENAI_API_KEY="your-openai-api-key"
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_PRO_PLAN_PRICE_ID="price_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/                 # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/            # Dashboard pages
│   │   ├── chat/
│   │   ├── image/
│   │   ├── prompts/
│   │   └── profile/
│   ├── api/                    # API routes
│   │   ├── auth/
│   │   ├── openai/
│   │   ├── stripe/
│   │   ├── webhooks/
│   │   └── prompts/
│   ├── pricing/               # Pricing page
│   └── layout.tsx             # Root layout
├── components/                # Reusable components
│   └── ui/                    # shadcn/ui components
├── lib/                       # Utility functions
│   ├── auth.ts               # NextAuth configuration
│   ├── prisma.ts             # Database client
│   ├── stripe.ts             # Stripe configuration
│   ├── openai.ts             # OpenAI client
│   └── utils.ts               # Utility functions
└── middleware.ts              # Route protection
```

## 🔒 Security Features

- **Authentication**: Secure session management with NextAuth.js
- **API Protection**: All API routes are protected with authentication
- **Rate Limiting**: Usage limits based on subscription plans
- **Input Validation**: All user inputs are validated
- **CORS Protection**: Configured for production security
- **Environment Variables**: Sensitive data stored securely

## 🧪 Testing

### Manual Testing Checklist

#### Authentication
- [ ] Google OAuth login works
- [ ] Email authentication works
- [ ] Session persistence across page refreshes
- [ ] Logout functionality
- [ ] Protected routes redirect to login

#### Payments
- [ ] Stripe checkout flow works
- [ ] Webhook processing functions
- [ ] Subscription status updates correctly
- [ ] Plan upgrade/downgrade works
- [ ] Payment success/failure handling

#### AI Features
- [ ] Chat API responds correctly
- [ ] Image generation works
- [ ] Rate limiting is enforced
- [ ] Error handling displays properly
- [ ] Usage tracking functions

#### Database
- [ ] User creation works
- [ ] Subscription management functions
- [ ] Prompt CRUD operations work
- [ ] Data persists correctly

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Check database permissions

#### Authentication Issues
- Verify Google OAuth credentials
- Check `NEXTAUTH_URL` matches your domain
- Ensure `NEXTAUTH_SECRET` is set

#### Stripe Issues
- Verify API keys are correct
- Check webhook endpoint configuration
- Ensure price IDs are valid

## 📈 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: API response caching
- **Database Indexing**: Optimized database queries
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/erdemgokmuharrem/openAISaas-StarterKit/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🎯 Roadmap

- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Team collaboration features
- [ ] API rate limiting improvements
- [ ] Mobile app development
- [ ] Advanced AI model integration

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [OpenAI](https://openai.com/) - AI capabilities
- [Stripe](https://stripe.com/) - Payment processing
- [Vercel](https://vercel.com/) - Deployment platform
- [shadcn/ui](https://ui.shadcn.com/) - UI components

---

## 🆘 Support

- 📧 Email: erdemmgokmuharrem@gmail.com
- 📖 Documentation: `/api-docs`
- 🐛 Issues: GitHub Issues

---

**Made with erdemgokmuharrem
