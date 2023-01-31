import './globals.css'
import { Poppins, Raleway } from '@next/font/google'

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ['latin'],
  variable: '--font-raleway'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${poppins.className} ${raleway.className}`}>
        <nav>
          <h1>logo</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        {children}  
      </body>
    </html>
  )
}
