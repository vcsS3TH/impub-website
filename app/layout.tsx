import './globals.css'
export const metadata = { title: 'IMPUB Dietrich Weber', description: 'Consulting, Project Management and Industrial Solutions' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
