import {Nunito_Sans} from 'next/font/google'
import {Providers} from '@/components/Providers'
import './globals.css'
import {ThemeToggler} from '@/components/ThemeToggler'

const nunito = Nunito_Sans({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Countries',
  description: 'App built with NextJS',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <header className="border-b">
              <div className="container mx-auto flex justify-between p-4">
                <h1 className="text-xl font-extrabold">Where in the world?</h1>
                <ThemeToggler />
              </div>
            </header>
            <main className="container mx-auto flex-1 p-4">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
