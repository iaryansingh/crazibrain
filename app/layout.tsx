import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import {NavbarHeader} from "@/app/components/navbar";
import {Footer} from "@/app/components/footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crazibrain Solutions',
  description: 'Innovation and technology',

    icons: {
        apple: "/apple-touch-icon.png",
    },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (

      < >
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <html lang='en'>
          <body className={inter.className}>
          <Providers>
              <NavbarHeader/>

              <main>{children}</main>
             <Footer/>
          </Providers>
          </body>
          </html>
      </>
  )
}
