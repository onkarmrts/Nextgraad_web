export default function AdminLayout({
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
        }
        @media (min-width: 768px) {
          html, body {
            height: 100%;
            overflow: hidden;
          }
          #admin-root {
            height: 100vh;
            overflow-y: auto;
          }
        }
        @media (max-width: 767px) {
          #admin-root {
            min-height: 100vh;
            overflow: auto;
          }
        }
      `}</style>
      <div id="admin-root">
        {children}
      </div>
    </>
  )
}