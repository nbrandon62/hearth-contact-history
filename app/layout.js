import Link from 'next/link'
import './globals.css'
import { logo } from './data'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='grid grid-cols-[225px_1fr] h-screen'>
          <div className='bg-[--white] p-6 text-xl font-bold shadow-md mr-3'>
            Contacts
          </div>
          <main className='flex flex-col p-6'>
            <div className='h-24'>
              <Link href='/'>{logo}</Link>
            </div>
            <div className='pl-12'>{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
