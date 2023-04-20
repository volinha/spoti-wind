import './globals.css'
import 'material-icons/iconfont/material-icons.css';

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Spoti-wind',
  description: 'Recriação da interface do Spotify em Next + TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-zinc-900 text-gray-200 ${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
