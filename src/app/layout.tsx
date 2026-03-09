import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className="bg-[#0B0F19] text-white">

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>

    </html>
  )
}