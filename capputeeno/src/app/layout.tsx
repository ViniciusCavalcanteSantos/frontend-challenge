import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { Providers } from './providers';


const saira = Saira({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno - Desafio front-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
