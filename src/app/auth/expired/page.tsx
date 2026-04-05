export default function ExpiredPage() {
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
        <div style={{ fontSize: 48 }}>⏰</div>
        <h2 style={{ color: '#e67e00' }}>Link Expired</h2>
        <p style={{ color: '#666' }}>
          Your magic link has expired (valid for 7 days).
          Please contact your internship coordinator to get a new one.
        </p>
      </div>
    </div>
  )
}