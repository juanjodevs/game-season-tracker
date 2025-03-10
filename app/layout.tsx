import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Theme, Container } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Game Season Tracker',
  description: 'Track upcoming seasons and content updates for your favorite Action RPGs in one place.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme appearance='dark'>
          <Container size='4' className='mx-5'>
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  )
}
