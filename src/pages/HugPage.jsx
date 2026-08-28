import { useEffect, useState } from 'react'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function HugPage() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="page">
      <FloatingHearts count={18} />

      <div className="card hug-card">
        {/* Hug illustration */}
        <div className="hug-image-wrapper">
          <img
            src="/cute-hug.jpg"
            alt="A warm hug"
            className="hug-image"
          />
        </div>

        {show && (
          <>
            <h1 className="card-title slide-up" style={{ marginTop: '16px' }}>
              One Last Thing... 🤗
            </h1>

            <div className="divider" />

            <div className="hug-note slide-up delay-2" style={{ opacity: 0 }}>
              <p>
                Yeh lo tumhara wala hug — tight wala, jisme saari
                duniya bhool jaaye wala. Chahe kitna bhi gussa ho,
                chahe kitni bhi door ho, yeh hug hamesha tumhare liye
                hai. Jab bhi mann kare, yahan aa jaana — main hamesha
                yahan hoon, tumhare liye, bas tumhare liye. 🤍
              </p>
              <p style={{ marginTop: '16px' }}>
                PS: Agar phone se hug nahi aata feel, toh asli wala
                bhi pending hai — jab bhi milo, double wala milega. 🫂💕
              </p>
            </div>

            <div className="divider" />

            <p
              className="hug-footer slide-up delay-4"
              style={{ opacity: 0 }}
            >
              Made with all my love, just for you 💖
            </p>
          </>
        )}
      </div>
    </div>
  )
}
