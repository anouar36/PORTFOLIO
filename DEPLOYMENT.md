# Deployment Guide

## Manual Git Commands (if Git is available)

```bash
# Add all changes
git add .

# Commit changes
git commit -m "🔧 Fix CV download issue and update to v1.2.0

- Fixed empty PDF download problem
- Added API route for reliable PDF serving
- Improved download functionality with fallbacks
- Updated package.json to v1.2.0
- Enhanced documentation"

# Push to main branch
git push origin main
```

## Vercel Deployment

1. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Environment Variables**: 
   - No environment variables needed for this deployment

3. **Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `pnpm build` (or `npm run build`)
   - Output Directory: Leave default
   - Install Command: `pnpm install` (or `npm install`)

4. **Domain Settings**:
   - Your site will be available at: `https://your-project-name.vercel.app`
   - You can add custom domains in the Vercel dashboard

## Key Files for Deployment

- ✅ `vercel.json` - Vercel configuration
- ✅ `next.config.mjs` - Next.js configuration with PDF headers
- ✅ `package.json` - Updated to v1.2.0
- ✅ `app/api/download-cv/route.ts` - API route for PDF serving
- ✅ `public/Anouar_Professional_CV.pdf` - CV file (510KB)

## Testing After Deployment

1. Visit your deployed site
2. Navigate to the CV download button
3. Click "Download CV"
4. Verify that a proper PDF file downloads (not empty)
5. Check that the PDF opens correctly and contains content

## Troubleshooting

If the CV download still doesn't work after deployment:

1. Check Vercel function logs in the dashboard
2. Ensure the PDF file is in the `public` folder
3. Verify the API route is working: `https://your-site.vercel.app/api/download-cv`
4. Check browser console for JavaScript errors

## Backup Solutions

The code includes fallback mechanisms:
1. Primary: API route with proper headers
2. Fallback 1: Direct fetch from public folder
3. Fallback 2: Simple link with target="_blank"
