import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'
import 'font-awesome/css/font-awesome.min.css'
import ImportBsJS from './ImportBsJS'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Center',
  description: 'Learning Center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className='App'>
        <Navbar/>
        {children}
        <Footer/>
        <ImportBsJS/>
      </body>
    </html>
  )
}
