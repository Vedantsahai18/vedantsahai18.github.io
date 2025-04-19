import '@/styles/globals.css'
import type { Metadata } from 'next'
import ProgressBar from '@/components/ProgressBar'

export const metadata: Metadata = {
  title: 'Vedant Sahai - Portfolio',
  description: 'Software Developer & ML Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {/* Accessibility: Skip link */}
        <a href="#home" className="skip-link">Skip to content</a>
        {/* Reading progress indicator */}
        <ProgressBar />
        {children}
      </body>
    </html>
  )
}