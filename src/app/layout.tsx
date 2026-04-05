import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white">
        <main>{children}</main>
      </body>
    </html>
  )
}