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
              <h1 className="card-title slide-up">Thank You yrr! 💖</h1>
              <div className="divider" />

              <p
                className="apology-content slide-up delay-2"
                style={{ opacity: 0 }}
              >
                you are damn janta hu mene kia glt kiaa par aaj k baad kbhi nhi hogaa kabhi bhi aapko iske baad nhi hiogaa plzz maaf kar dena jant ahu fir shabdh par iss baar shabdo se zyada kar k bataungaa sab gltia sahi kar lungaa sath me plzz iske baad kbhi bhi nhi hoaa yeh aapne actions me batinga apne aaj tak jo kia sab sahi ki aapko sahi prove karunga sahi kar dunga sab yrrr nhi chor skta na chhata hu kbhi bhi nhi aau ya naa par nhi chorna chhta meri galti h me sahi kar lungaa kbhi bhi nhi hoga sabse pehle dod ka aajungaa baat samnjhe nhi samne ho jaunga khada plzzzz ek baar bhaorsa iske baad kbhi nhi todungaa yrrr anyways.. kbhi bhi nhi
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
