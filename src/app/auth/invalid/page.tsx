export default function InvalidPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      background: '#f0f4ff'
    }}>
      <div style={{
        background: 'white',
        borderRadius: 12,
        padding: 40,
        maxWidth: 420,
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
      }}>
        <div style={{ fontSize: 48 }}>❌</div>
        <h2 style={{ color: '#cc0000' }}>Invalid Link</h2>
        <p style={{ color: '#666' }}>
          This link is invalid or has already been used.
          Please contact your internship coordinator for a new link.
        </p>
      </div>
    </div>
  )
}