import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARP Digital Marketing - Building Brands With Passion',
  description: 'Transform your digital presence with expert marketing strategies that drive real results. We offer social media management, paid ads, graphic design, content creation, and more.',
  keywords: ['digital marketing', 'social media management', 'paid advertising', 'graphic design', 'content creation', 'email marketing', 'brand building'],
  authors: [{ name: 'ARP Digital Marketing' }],
  creator: 'ARP Digital Marketing',
  publisher: 'ARP Digital Marketing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.arpdigitalmarketing.site',
    siteName: 'ARP Digital Marketing',
    title: 'ARP Digital Marketing - Building Brands With Passion',
    description: 'Transform your digital presence with expert marketing strategies that drive real results. We offer social media management, paid ads, graphic design, content creation, and more.',
    images: [
      {
        url: 'https://www.arpdigitalmarketing.site/metadata2.jpeg',
        width: 1200,
        height: 630,
        alt: 'ARP Digital Marketing - Building Brands With Passion',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arpdigitalmarketing',
    creator: '@arpdigitalmarketing',
    title: 'ARP Digital Marketing - Building Brands With Passion',
    description: 'Transform your digital presence with expert marketing strategies that drive real results.',
    images: ['https://www.arpdigitalmarketing.site/metadata2.jpeg'],
  },
  other: {
    'fb:app_id': 'your-facebook-app-id',
    'instagram:site': '@arpdigitalmarketing_',
    'tiktok:site': '@arpdigitalmarketing',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:image:alt': 'ARP Digital Marketing - Building Brands With Passion',
    'og:updated_time': new Date().toISOString(),
    'article:author': 'ARP Digital Marketing',
    'article:publisher': 'ARP Digital Marketing',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://www.arpdigitalmarketing.site'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://www.arpdigitalmarketing.site/metadata2.jpeg" />
        <meta property="og:image:secure_url" content="https://www.arpdigitalmarketing.site/metadata2.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="ARP Digital Marketing - Building Brands With Passion" />
        <meta property="og:title" content="ARP Digital Marketing - Building Brands With Passion" />
        <meta property="og:description" content="Transform your digital presence with expert marketing strategies that drive real results. We offer social media management, paid ads, graphic design, content creation, and more." />
        <meta property="og:url" content="https://www.arpdigitalmarketing.site" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ARP Digital Marketing" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.arpdigitalmarketing.site/metadata2.jpeg" />
        <meta name="twitter:title" content="ARP Digital Marketing - Building Brands With Passion" />
        <meta name="twitter:description" content="Transform your digital presence with expert marketing strategies that drive real results." />
        <meta name="twitter:site" content="@arpdigitalmarketing" />
        <meta name="twitter:creator" content="@arpdigitalmarketing" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
