import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'
import Confetti from '../components/Confetti.jsx'

export default function ForgiveePage() {
  const [showContent, setShowContent] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page">
      <Confetti count={60} />
      <FloatingHearts count={20} />

      <div className="card" style={{ textAlign: 'center' }}>
        <div className="celebration">
          <div className="celebration-emoji">🥰</div>

          {showContent && (
            <>
              <h1 className="card-title slide-up">Thank You Jaan! 💖</h1>
              <div className="divider" />

              <p
                className="apology-content slide-up delay-2"
                style={{ opacity: 0 }}
              >
                You just made me the{'\n'}
                happiest person alive! 🥹{'\n\n'}
                I promise I'll make it{'\n'}
                up to you and never{'\n'}
                let you down again.{'\n\n'}
                I love you more than{'\n'}
                words can ever say... 💕
              </p>

              <div className="divider" />

              <p
                className="card-subtitle slide-up delay-4"
                style={{ opacity: 0, marginTop: '12px' }}
              >
                Forever yours 🤍
              </p>

              <button
                className="btn-primary slide-up delay-5"
                style={{ opacity: 0, marginTop: '24px' }}
                onClick={() => navigate('/agreement')}
              >
                Sign Our Promise 📜
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
