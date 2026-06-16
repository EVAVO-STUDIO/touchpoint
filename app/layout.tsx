import type { Metadata, Viewport } from 'next';
import { Manrope, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';
import './globals.css';

/**
 * Typography pairing:
 *  - Space Grotesk (display) — controlled, contemporary and technical without
 *    feeling generic. A better fit for a built-environment service brand than
 *    an expressive editorial serif.
 *  - Manrope (body) — clean geometric sans that reads as premium and practical.
 *  - IBM Plex Mono (labels) — restrained technical feel for section markers,
 *    metadata and navigation details.
 */
const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d10' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.company, url: siteConfig.parent.url }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  applicationName: siteConfig.name,
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/og-touchpoint.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} by ${siteConfig.company}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/og-touchpoint.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.parent.url}/#organization`,
      name: siteConfig.company,
      url: siteConfig.parent.url,
      sameAs: [siteConfig.parent.url, siteConfig.social.linkedin].filter(Boolean),
      contactPoint: {
        '@type': 'ContactPoint',
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        contactType: 'Sales',
        areaServed: ['AU', 'NZ'],
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteConfig.url}/#software`,
      name: `${siteConfig.name} by ${siteConfig.company}`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: { '@id': `${siteConfig.parent.url}/#organization` },
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers, builders, asset owners and facilities managers',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} by ${siteConfig.company}`,
      description: siteConfig.description,
      publisher: { '@id': `${siteConfig.parent.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
