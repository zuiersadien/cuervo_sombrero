import './globals.css'
import { Roboto_Mono  } from 'next/font/google'


import localFont from 'next/font/local'


const myFont = localFont({ src: '../../public/lovely.ttf' })

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}