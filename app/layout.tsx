import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import ReactLenis from 'lenis/react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif']
})

export const metadata: Metadata = {
  title: 'Vashisht Hackathon 3.O',
  description: 'A retro-futuristic hackathon experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactLenis root />
        {children}
      </body>
    </html>
  )
} 