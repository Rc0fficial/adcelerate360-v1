# Email Setup Instructions

I've set up the contact form to send emails using **Resend**. Follow these steps to complete the setup:

## 1. Install Resend Package

Run this command in your terminal:

```bash
npm install resend
```

## 2. Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address
4. Go to **API Keys** section: [https://resend.com/api-keys](https://resend.com/api-keys)
5. Click **Create API Key**
6. Copy the API key (starts with `re_`)

## 3. Add Environment Variable

Create a `.env.local` file in your project root:

```bash
touch .env.local
```

Add your API key to `.env.local`:

```
RESEND_API_KEY=re_KAWNmk5D_CELZU7LmUT7rzKiztcrQ32ba
```

## 4. (Optional) Set Up Custom Domain

By default, emails will be sent from `onboarding@resend.dev`. To use your own domain:

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click **Add Domain**
3. Follow the DNS setup instructions
4. Once verified, update the `from` field in `app/api/send-email/route.ts`:

```typescript
from: 'Adcelerate360 <contact@yourdomain.com>',
```

## 5. Test the Contact Form

1. Start your development server:
```bash
npm run dev
```

2. Visit the contact form on your website
3. Fill out and submit the form
4. Check your email at `hammad@adcelerate360.com`

## What's Been Set Up

✅ API route created at `/app/api/send-email/route.ts`
✅ Contact form updated to send emails via API
✅ Beautiful HTML email template with all form data
✅ Loading states and error handling
✅ Email will be sent to: `hammad@adcelerate360.com`
✅ Reply-to address set to the user's email for easy responses

## Troubleshooting

### Email not sending?
1. Check that `RESEND_API_KEY` is set in `.env.local`
2. Make sure you installed the `resend` package
3. Check browser console and server logs for errors
4. Verify your Resend account is verified

### Getting "Failed to send email" error?
- Check if you've exceeded the free tier limit (100 emails/day)
- Verify your API key is correct and active
- Check Resend dashboard for any issues

### Want to change the recipient email?
Update line 17 in `app/api/send-email/route.ts`:
```typescript
to: ['your-new-email@example.com'],
```

## Alternative: EmailJS (No Backend Needed)

If you prefer not to use an API route, you can use EmailJS which works entirely from the frontend:

1. Sign up at [https://emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Follow their Next.js integration guide

## Support

Need help? Contact me or check:
- [Resend Documentation](https://resend.com/docs/introduction)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
