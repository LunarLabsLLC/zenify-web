import './../globals.css';
import './styles.css';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google'
import localFont from 'next/font/local'
import Footer from './Footer';
import Header from './Header';

const roboto = Roboto_Condensed({ subsets: ['latin'], variable: "--font-roboto" });
const monaspace = localFont({
  src: [
    {
      path: '../../../public/fonts/MonaspaceNeon-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MonaspaceNeon-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/MonaspaceNeon-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/MonaspaceNeon-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--font-monaspace"
});
const pattanakarn = localFont({
  src: [
    {
      path: '../../../public/fonts/Pattanakarn-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Pattanakarn-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/Pattanakarn-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Pattanakarn-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--font-pattanakarn"
});

export const metadata: Metadata = {
  title: 'Zenify Client',
  description: 'An optimized Minecraft PvP Client!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${monaspace.variable} ${pattanakarn.variable} bg-base-100 min-h-screen flex flex-col items-center justify-center`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
