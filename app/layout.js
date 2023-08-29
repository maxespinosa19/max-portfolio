import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Max Portfolio',
  description: 'Max Espinosa Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "w-full h-full bg-gradient-to-b from-[#280A50] to-[#56438e] animate-gradient-y"}>{children}</body>
    </html>
  )
}
