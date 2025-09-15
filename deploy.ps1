# Portfolio Deployment Script
# Run this script to deploy your portfolio v1.2.0

Write-Host "🚀 Portfolio v1.2.0 Deployment Script" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Green

# Check if we're in the right directory
$currentPath = Get-Location
$expectedPath = "c:\Users\Youcode\Desktop\portfolio_2"

if ($currentPath.Path -ne $expectedPath) {
    Write-Host "⚠️  Changing to project directory..." -ForegroundColor Yellow
    Set-Location $expectedPath
}

Write-Host "📂 Current directory: $(Get-Location)" -ForegroundColor Cyan

# Check if CV file exists and get its size
$cvPath = ".\public\Anouar_Professional_CV.pdf"
if (Test-Path $cvPath) {
    $cvSize = (Get-Item $cvPath).Length
    Write-Host "✅ CV file found: $cvSize bytes" -ForegroundColor Green
    
    if ($cvSize -eq 0) {
        Write-Host "❌ WARNING: CV file is empty!" -ForegroundColor Red
        Write-Host "   Please replace with your new CV file." -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Host "❌ CV file not found!" -ForegroundColor Red
    Write-Host "   Please add your CV file as 'Anouar_Professional_CV.pdf' in the public folder." -ForegroundColor Yellow
    exit 1
}

# Check git status
Write-Host "`n📊 Checking git status..." -ForegroundColor Cyan
try {
    $gitStatus = git status --porcelain 2>$null
    if ($gitStatus) {
        Write-Host "📝 Changes detected:" -ForegroundColor Yellow
        git status --short
    } else {
        Write-Host "✅ No changes to commit" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ Git not available or not a git repository" -ForegroundColor Red
    Write-Host "   Please ensure git is installed and this is a git repository." -ForegroundColor Yellow
    exit 1
}

# Ask user confirmation
Write-Host "`n🤔 Do you want to proceed with deployment?" -ForegroundColor Yellow
Write-Host "   This will:" -ForegroundColor White
Write-Host "   1. Add all changes to git" -ForegroundColor White
Write-Host "   2. Commit with v1.2.0 message" -ForegroundColor White
Write-Host "   3. Push to origin main" -ForegroundColor White
Write-Host "   4. Trigger Vercel deployment" -ForegroundColor White

$response = Read-Host "`n   Continue? (y/N)"

if ($response -ne "y" -and $response -ne "Y") {
    Write-Host "❌ Deployment cancelled" -ForegroundColor Red
    exit 0
}

# Execute deployment steps
Write-Host "`n🚀 Starting deployment..." -ForegroundColor Green

# Step 1: Add all changes
Write-Host "📦 Adding changes to git..." -ForegroundColor Cyan
git add .

# Step 2: Commit
Write-Host "💾 Committing changes..." -ForegroundColor Cyan
$commitMessage = "🚀 v1.2.0: Fix CV download + update image + enhance UX

- Fixed empty PDF download with triple fallback system
- Updated profile image to high-quality transparent version  
- Added loading states and user feedback for downloads
- Enhanced error handling with comprehensive logging
- Added debug endpoint for troubleshooting
- Improved TypeScript compatibility and code quality"

git commit -m $commitMessage

# Step 3: Push to origin
Write-Host "📤 Pushing to origin main..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deployment completed successfully!" -ForegroundColor Green
    Write-Host "🎉 Your portfolio v1.2.0 is now deploying to Vercel!" -ForegroundColor Green
    Write-Host "`n🔗 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. Check Vercel dashboard for build status" -ForegroundColor White
    Write-Host "   2. Test CV download on your live site" -ForegroundColor White
    Write-Host "   3. Verify image updates are visible" -ForegroundColor White
    Write-Host "`n🐛 If issues occur:" -ForegroundColor Yellow
    Write-Host "   - Visit /api/debug-cv on your site" -ForegroundColor White
    Write-Host "   - Check browser console for errors" -ForegroundColor White
    Write-Host "   - Review FINAL_DEPLOYMENT_CHECKLIST.md" -ForegroundColor White
} else {
    Write-Host "`n❌ Deployment failed!" -ForegroundColor Red
    Write-Host "   Please check the error message above and try again." -ForegroundColor Yellow
}

Write-Host "`n📄 View deployment checklist:" -ForegroundColor Cyan
Write-Host "   Get-Content .\FINAL_DEPLOYMENT_CHECKLIST.md" -ForegroundColor White
