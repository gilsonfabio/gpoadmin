import '../../globals.css'

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className='bg-zinc-900'>
        {children}
      </body>
    </html>
  )
}
