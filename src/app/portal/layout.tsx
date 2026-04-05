export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          background: #0a0f1e;
        }

        @media (min-width: 768px) {
          html, body { height: 100%; overflow: hidden; }
        }

        @media (max-width: 767px) {
          /* Show mobile top bar */
          div[style*="mobileTopBar"], .mobile-bar {
            display: flex !important;
          }

          /* Sidebar slides in from left */
          aside {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            height: 100vh !important;
            transform: translateX(-100%) !important;
            transition: transform 0.25s ease !important;
            z-index: 50 !important;
          }

          /* Main scrolls on mobile */
          main {
            overflow-y: auto !important;
            height: auto !important;
            min-height: 100vh !important;
          }

          /* Tab content padding on mobile */
          main > div {
            padding: 20px 16px 60px !important;
          }

          /* Stats 2 col on mobile */
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      {children}
    </>
  )
}