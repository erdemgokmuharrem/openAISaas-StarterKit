# 🚀 Deployment Guide - AI SaaS Starter Kit

This guide will walk you through deploying your AI SaaS Starter Kit to production using Vercel.

## 📋 Prerequisites

Before deploying, ensure you have:

- [ ] All API keys configured
- [ ] Production database ready
- [ ] Domain name (optional)
- [ ] Vercel account
- [ ] GitHub repository connected

## 🔧 Pre-Deployment Setup

### 1. API Keys Configuration

Make sure you have all required API keys:

#### OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create account and add billing information
3. Generate API key from [API Keys page](https://platform.openai.com/api-keys)
4. Copy the key (starts with `sk-`)

#### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Set authorized redirect URI: `https://yourdomain.vercel.app/api/auth/callback/google`
6. Copy Client ID and Secret

#### Stripe Configuration
1. Create account at [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get API keys from [API Keys page](https://dashboard.stripe.com/apikeys)
3. Create product and price for Pro plan
4. Set up webhook endpoint: `https://yourdomain.vercel.app/api/webhooks/stripe`
5. Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
6. Copy webhook secret

### 2. Database Setup

Choose one of these options:

#### Option A: Supabase (Recommended)
1. Create account at [Supabase](https://supabase.com/)
2. Create new project
3. Go to Settings → Database
4. Copy connection string
5. Update `DATABASE_URL` in environment variables

#### Option B: PlanetScale
1. Create account at [PlanetScale](https://planetscale.com/)
2. Create new database
3. Copy connection string
4. Update `DATABASE_URL` in environment variables

#### Option C: Railway
1. Create account at [Railway](https://railway.app/)
2. Create new PostgreSQL database
3. Copy connection string
4. Update `DATABASE_URL` in environment variables

## 🚀 Vercel Deployment

### Method 1: Deploy from GitHub (Recommended)

1. **Connect Repository**
   ```bash
   # If not already connected
   git remote add origin https://github.com/erdemgokmuharrem/openAISaas-StarterKit.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel dashboard, go to your project
   - Navigate to Settings → Environment Variables
   - Add all variables from your `.env.local`:

   ```env
   DATABASE_URL=postgresql://...
   NEXTAUTH_URL=https://yourdomain.vercel.app
   NEXTAUTH_SECRET=your-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   OPENAI_API_KEY=sk-your-openai-key
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_PRO_PLAN_PRICE_ID=price_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

4. **Deploy**
   - Click "Deploy" button
   - Wait for deployment to complete
   - Your app will be available at `https://yourproject.vercel.app`

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Configure Environment Variables**
   ```bash
   vercel env add DATABASE_URL
   vercel env add NEXTAUTH_URL
   vercel env add NEXTAUTH_SECRET
   # ... add all other variables
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 🔧 Post-Deployment Configuration

### 1. Update OAuth Redirect URIs

After deployment, update your OAuth providers:

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to your OAuth 2.0 client
3. Add production redirect URI: `https://yourdomain.vercel.app/api/auth/callback/google`
4. Save changes

### 2. Update Stripe Webhooks

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to Webhooks
3. Update endpoint URL to: `https://yourdomain.vercel.app/api/webhooks/stripe`
4. Test webhook endpoint

### 3. Database Migration

Run database migrations on production:

```bash
# Connect to your production database
npx prisma migrate deploy
npx prisma generate
```

## 🧪 Testing Production Deployment

### 1. Authentication Testing
- [ ] Google OAuth login works
- [ ] Email authentication works
- [ ] Session persistence works
- [ ] Logout functionality works

### 2. Payment Testing
- [ ] Stripe checkout flow works
- [ ] Webhook processing works
- [ ] Subscription status updates
- [ ] Plan upgrade/downgrade works

### 3. AI Features Testing
- [ ] Chat API responds correctly
- [ ] Image generation works
- [ ] Rate limiting is enforced
- [ ] Error handling works

### 4. Database Testing
- [ ] User creation works
- [ ] Subscription management works
- [ ] Prompt CRUD operations work
- [ ] Data persists correctly

## 🔒 Security Checklist

### Production Security
- [ ] All API keys are stored securely
- [ ] HTTPS is enabled
- [ ] CORS is configured properly
- [ ] Rate limiting is implemented
- [ ] Input validation is working
- [ ] Error messages don't expose sensitive data

### Environment Variables
- [ ] No sensitive data in code
- [ ] Environment variables are properly set
- [ ] Database credentials are secure
- [ ] API keys are production keys

## 📊 Monitoring Setup

### 1. Error Tracking (Optional)
Add Sentry for error tracking:

```bash
npm install @sentry/nextjs
```

Configure in `sentry.client.config.js`:
```javascript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

### 2. Analytics (Optional)
Add Google Analytics:

```javascript
// In your layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check database permissions
- Ensure database is accessible from Vercel

#### Authentication Issues
- Verify OAuth redirect URIs
- Check `NEXTAUTH_URL` matches your domain
- Ensure `NEXTAUTH_SECRET` is set

#### Stripe Issues
- Verify webhook endpoint is correct
- Check webhook events are selected
- Ensure production keys are used

### Debug Commands

```bash
# Check build locally
npm run build

# Test production build
npm start

# Check environment variables
vercel env ls

# View deployment logs
vercel logs
```

## 📈 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Optimize image sizes
- Use appropriate formats (WebP, AVIF)

### 2. Code Splitting
- Implement dynamic imports
- Use React.lazy for large components
- Optimize bundle size

### 3. Caching
- Implement API response caching
- Use Vercel's edge caching
- Optimize database queries

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
3. Check [GitHub Issues](https://github.com/erdemgokmuharrem/openAISaas-StarterKit/issues)
4. Create new issue with detailed information

## 🎉 Success!

Your AI SaaS Starter Kit is now deployed and ready for production use!

- **Live URL**: `https://yourproject.vercel.app`
- **Admin Dashboard**: `https://yourproject.vercel.app/dashboard`
- **API Endpoints**: `https://yourproject.vercel.app/api/*`

---

**Next Steps:**
1. Test all features thoroughly
2. Set up monitoring and analytics
3. Configure custom domain (optional)
4. Set up automated backups
5. Monitor performance and usage

For more information, visit our [GitHub repository](https://github.com/erdemgokmuharrem/openAISaas-StarterKit).
