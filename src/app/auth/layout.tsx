export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          background: #0a0f1e;
          height: 100%;
        }
      `}</style>
      {children}
    </>
  )
}