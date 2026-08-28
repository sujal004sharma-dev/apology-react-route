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
                Yeh lo humara wala hug — tight wala, jisme saari
                duniya bhool jaate h. Chahe kitna bhi gussa ho,
                chahe kitni bhi door ho, yeh hug hamesha humare liye
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
              style={{ opacity: 5 }}
            >
              I know i am a terrible person 3 din ho gye ek mene kar dia 2 din aapne ho ske to maaf kr do ek sec k liye ansu nhi ruk rahe k sach me feel hora h glt kiaa par sudhar lunga yrrr kbhi nhi hoga plzz unblock kar k baad kr lo yrr mil lo plzzz plzzz mil looo🙏🙏😭😭💖{'\n\n'}
              I promise you Kbhi nhi tutegaa😭🙏 
            </p>
          </>
        )}
      </div>
    </div>
  )
}
