import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Dreiseitig Press — Original Works from Endangered Languages',
  description:
    'Dreiseitig Press publishes original literary works from endangered languages with facing-page English translations and author recordings. Three-sided: original language, translation, spoken word.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${cormorant.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
