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
        url: '/metadata.png',
        width: 1200,
        height: 630,
        alt: 'ARP Digital Marketing - Building Brands With Passion',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arpdigitalmarketing',
    creator: '@arpdigitalmarketing',
    title: 'ARP Digital Marketing - Building Brands With Passion',
    description: 'Transform your digital presence with expert marketing strategies that drive real results.',
    images: ['/metadata.png'],
  },
  other: {
    'fb:app_id': 'your-facebook-app-id',
    'instagram:site': '@arpdigitalmarketing_',
    'tiktok:site': '@arpdigitalmarketing',
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
