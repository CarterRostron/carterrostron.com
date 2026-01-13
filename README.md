# Carter Rostron - Personal Portfolio Website

A modern, boho-geometric styled portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Boho/Geometric Design**: Unique aesthetic with curved shapes, organic borders, and flowing animations
- **Single-Page Layout**: Smooth scrolling navigation between sections
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Section Highlights**:
  - Hero landing with animated geometric shapes
  - About section with bio
  - Portfolio showcase with project cards
  - Skills organized by category
  - Contact form with EmailJS integration
- **Performance**: Static site generation for fast loading
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom boho theme
- **Animations**: Framer Motion
- **Contact Form**: EmailJS
- **Deployment**: GitHub Pages
- **Domain**: Porkbun (custom domain)

## Color Palette

- **Sage Green** (#57805c): Primary CTAs and links
- **Gold** (#dc9a1a): Accents and highlights
- **Earth Brown** (#9d8254): Text and borders
- **Cream** (#fdfdfb): Backgrounds and surfaces

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment variables file
cp .env.local.example .env.local

# Add your EmailJS credentials to .env.local
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# The static site will be in the /out directory
```

## EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

## Customization

### Update Personal Information

Edit `lib/constants.ts` to update:
- Site configuration (name, title, description)
- Social links (GitHub, LinkedIn, email)
- Projects data
- Skills categories

### Add Project Images

Place project screenshots in `public/images/projects/` and update the `image` path in `PROJECTS` array.

### Add Profile Photo

Replace the placeholder emoji in `components/sections/About.tsx` with your profile image.

## Deployment

### GitHub Pages

1. Push code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Configure custom domain in GitHub Settings > Pages

### Custom Domain (Porkbun)

1. Update `public/CNAME` with your domain
2. Add DNS records in Porkbun:
   - A records pointing to GitHub Pages IPs (185.199.108-111.153)
   - CNAME record: `www` → `yourusername.github.io`
3. Enable "Enforce HTTPS" in GitHub Settings

## Project Structure

```
carterrostron.com/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── forms/             # Contact form
│   ├── layout/            # Navigation & Footer
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities & constants
├── public/                # Static assets
├── styles/                # Global styles
└── types/                 # TypeScript definitions
```

## License

This project is open source and available under the MIT License.
