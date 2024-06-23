import { GeistSans } from 'geist/font/sans'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import './globals.css'
import { Providers } from './provider'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Ingageクイズ',
  description: '白熱したクイズバトルをあなたにお届けします。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body className='bg-background text-foreground'>
        <Providers>
          <div className='flex flex-col min-h-[100dvh]'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
