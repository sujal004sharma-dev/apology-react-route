import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

const CORRECT_PIN = '2701'
const MAX_LENGTH = 4

export default function PinPage() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [shaking, setShaking] = useState(false)
  const navigate = useNavigate()

  const handleKeyPress = useCallback((digit) => {
    setError('')
    setPin(prev => {
      if (prev.length >= MAX_LENGTH) return prev
      const newPin = prev + digit

      if (newPin.length === MAX_LENGTH) {
        // Check pin after a brief delay for visual feedback
        setTimeout(() => {
          if (newPin === CORRECT_PIN) {
            navigate('/apology')
          } else {
            setShaking(true)
            setError('Wrong PIN! Try again 🥺')
            setTimeout(() => {
              setPin('')
              setShaking(false)
            }, 600)
          }
        }, 200)
      }

      return newPin
    })
  }, [navigate])

  const handleBackspace = useCallback(() => {
    setError('')
    setPin(prev => prev.slice(0, -1))
  }, [])

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'empty', '0', 'back']

  return (
    <div className="page">
      <FloatingHearts count={8} />

      <div className="card">
        <div className="card-emoji">🔐</div>
        <h1 className="card-title">Enter Our Special PIN</h1>
        <p className="card-text" style={{ marginBottom: '28px' }}>
          Only you know this number... 💕
        </p>

        {/* PIN Display */}
        <div className="pin-display">
          {Array.from({ length: MAX_LENGTH }, (_, i) => (
            <div
              key={i}
              className={`pin-dot ${i < pin.length ? 'filled' : ''} ${shaking ? 'error' : ''}`}
            >
              {i < pin.length ? '•' : ''}
            </div>
          ))}
        </div>

        {/* PIN Pad */}
        <div className="pin-pad">
          {keys.map((key, i) => {
            if (key === 'empty') {
              return <div key={i} className="pin-key empty" />
            }
            if (key === 'back') {
              return (
                <button
                  key={i}
                  className="pin-key backspace"
                  onClick={handleBackspace}
                  type="button"
                  aria-label="Backspace"
                >
                  ⌫
                </button>
              )
            }
            return (
              <button
                key={i}
                className="pin-key"
                onClick={() => handleKeyPress(key)}
                type="button"
              >
                {key}
              </button>
            )
          })}
        </div>

        {/* Error Message */}
        <div className="pin-error-text">
          {error || '\u00A0'}
        </div>
      </div>
    </div>
  )
}
