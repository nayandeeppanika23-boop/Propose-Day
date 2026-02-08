import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Propose Day',
  description: 'A romantic proposal planning application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
