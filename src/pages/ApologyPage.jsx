import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function ApologyPage() {
  const navigate = useNavigate()
  const [yesSize, setYesSize] = useState(16)
  const [noCount, setNoCount] = useState(0)

  const handleNo = useCallback(() => {
    setNoCount(prev => {
      const next = prev + 1
      // Increase font size, but cap it so it doesn't break the layout
      setYesSize(s => Math.min(s + 4, 60))
      return next
    })
  }, [])

  const handleYes = useCallback(() => {
    navigate('/forgivee')
  }, [navigate])

  const getNoText = () => {
    const texts = [
      'Nahi 😤',
      'Bilkul nahi 😠',
      'Kabhi nahi 🙅‍♀️',
      'Pakka nahi 😾',
      'Soch ke bataungi 🤔',
      'Hmm... nahi 😏',
      'Still no 😤',
      'Arre nahi bola na 😡',
      'Kitni baar bolu 🙄',
      'Okay fine... nahi 😜',
    ]
    return texts[Math.min(noCount, texts.length - 1)]
  }

  // Calculate yes button size with safe limits
  const yesPadding = Math.min(16 + noCount * 4, 40)
  const yesWidth = Math.min(200 + noCount * 30, 380)

  return (
    <div className="page">
      <FloatingHearts count={12} />

      <div className="card" style={{ maxWidth: '440px' }}>
        <div className="card-emoji">💌</div>
        <h1 className="card-title">Meri Jaan...</h1>
        <div className="divider" />

        <div className="apology-content"> Main jaanta hoon sorry haar- haar baar kehna kaam nahi karta,{' '} {'\n'} par genuinely kitna hurt feel hota hai jab koi aise critical moment pe chhod de.{' '} {'\n\n'} Main jaanta hoon ki main iske layak hoon, par main bahut bahut sorry hoon.{' '} {'\n\n'} Main aisa kabhi nahi karunga yaar — meri jaan, kabhi aisa nahi hoga, sapne mein bhi nahi.{' '} {'\n\n'} Kasam kha kar bol raha hoon: tere kehne pe, tere liye, kuch bhi karne par, tujhe chhod kar nahi jaunga kabhi.{' '} {'\n\n'} Main khud se dimag nahi lagaaunga aur kuch bhi aisa nahi karunga. Main sach mein bahut sorry hoon yaar.{' '} {'\n\n'} Mujhe ek mauka de, please... 🥺💕 {'\n\n'}
          Apka punishmnet banta h par baat toh karo yrr please yrrr lala plzzzz.
        </div>

        <div className="divider" />

        <p className="card-subtitle" style={{ marginTop: '16px', marginBottom: '20px' }}>
          Please mujhe maaf karogi? 🥺
        </p>

        <div className="forgive-buttons">
          <button
            className="btn-yes"
            onClick={handleYes}
            style={{
              fontSize: `${yesSize}px`,
              padding: `${yesPadding}px 32px`,
              width: `${yesWidth}px`,
              maxWidth: '100%',
            }}
          >
            Haan, maaf kiya! 💗
          </button>

          <button
            className="btn-no"
            onClick={handleNo}
          >
            {getNoText()}
          </button>
        </div>

        {noCount > 0 && (
          <p
            className="card-text fade-in"
            style={{
              marginTop: '16px',
              marginBottom: '0',
              fontSize: '13px',
            }}
          >
            {noCount < 3
              ? 'Please? 🥺'
              : noCount < 6
              ? 'I won\'t give up... 😢💕'
              : noCount < 9
              ? 'The button is getting bigger because my love is too! 💗'
              : 'You know you want to press the big button 😏💖'}
          </p>
        )}
      </div>
    </div>
  )
}
