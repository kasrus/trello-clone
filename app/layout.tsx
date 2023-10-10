import './globals.css'


export const metadata: Metadata = {
  title: 'Trello 2.0 Clone',
  description: 'Created by Kasey Ruslim ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">{children}</body>
    </html>
  )
}
