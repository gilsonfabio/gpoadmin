import NavDashboard from '@/app/components/NavDashboard'
import '../../globals.css'
import Sidebar from '@/app/components/Sidebar'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className=''>
        <NavDashboard />
        <div className='flex flex-row '>
          <Sidebar />
          {children}
        </div>          
      </body>
    </html>
  )
}
