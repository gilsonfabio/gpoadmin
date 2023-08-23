import Banner from '@/app/components/Banner'
import NavPublic from '../../components/NavPublic'
import '../../globals.css'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className=''>
        <NavPublic />
        <Banner />
        {children}
      </body>
    </html>
  )
}
