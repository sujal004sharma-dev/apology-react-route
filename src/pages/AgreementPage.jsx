import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function AgreementPage() {
  const navigate = useNavigate()
  const canvasRef = useRef(null)
  const agreementRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)
  const [saved, setSaved] = useState(false)
  const [ctx, setCtx] = useState(null)

  // Set up canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    const context = canvas.getContext('2d')
    context.scale(dpr, dpr)
    context.strokeStyle = '#1a1a6e'
    context.lineWidth = 2.5
    context.lineCap = 'round'
    context.lineJoin = 'round'
    setCtx(context)
  }, [])

  // Get position from mouse or touch event
  const getPos = useCallback((e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }, [])

  const startDraw = useCallback((e) => {
    e.preventDefault()
    if (!ctx) return
    setIsDrawing(true)
    setHasDrawn(true)
    const pos = getPos(e)
    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
  }, [ctx, getPos])

  const draw = useCallback((e) => {
    e.preventDefault()
    if (!isDrawing || !ctx) return
    const pos = getPos(e)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
  }, [isDrawing, ctx, getPos])

  const stopDraw = useCallback((e) => {
    if (e) e.preventDefault()
    setIsDrawing(false)
  }, [])

  const clearCanvas = useCallback(() => {
    if (!ctx || !canvasRef.current) return
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
    setHasDrawn(false)
  }, [ctx])

  const handleSave = useCallback(async () => {
    if (!agreementRef.current) return

    try {
      const canvas = await html2canvas(agreementRef.current, {
        backgroundColor: '#f8f4f0',
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const link = document.createElement('a')
      link.download = 'our-agreement-of-love.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      console.error('Screenshot failed:', err)
    }
  }, [])

  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="page">
      <FloatingHearts count={10} />

      {/* The agreement card that gets screenshotted */}
      <div className="agreement-wrapper">
        <div className="agreement-card" ref={agreementRef}>
          {/* Header */}
          <div className="agreement-header">
            <div className="agreement-seal">📜</div>
            <h1 className="agreement-title">Agreement of prem sath ladai sab bur not chora chari</h1>
            <p className="agreement-date">{today}</p>
          </div>

          <div className="agreement-divider" />

          {/* Body */}
          <div className="agreement-body">
            <p className="agreement-text">
              I, the undersigned, hereby solemnly promise and declare that:
            </p>

            <div className="agreement-clauses">
              <p className="agreement-clause">
                <span className="clause-num">1.</span> I will never intentionally hurt you again, and if I ever do, I will own up to it immediately.
              </p>
              <p className="agreement-clause">
                <span className="clause-num">2.</span> I will always listen to your feelings and respect them, even when I don't fully understand.
              </p>
              <p className="agreement-clause">
                <span className="clause-num">3.</span> I will make every effort to be the person you deserve, every single day Kbhi sirf apne emotions nhi dekhunga aapke samjhunga aap bhi ho glt karta hu abb nhi krunga 
              </p>
              <p className="agreement-clause">
                <span className="clause-num">4.</span>Never ever ever kabhi bhi khudse na samjhunga ulta naa blank hounga na gussa ma ego kuch nhi bhag k aajunga samne hgi pakad lungaa 
              </p>
              <p className="agreement-clause">
                <span className="clause-num">5.</span>
                Jnata hu karne se kuch nhi hogaa par fir bhi kar raha hu yr tera sth chhta hu aur tujhe dena chhata hu rahungaa yrrr gurantee h yeeh kbhi bhi nhi jaungaa maa ksm yrrr . 💕
              </p>
            </div>
          </div>

          <div className="agreement-divider" />

          {/* Signatures */}
          <div className="agreement-signatures">
            <div className="signature-block">
              <p className="signature-label">His Signature</p>
              <div className="signature-area my-signature">
                <img
                  src="/signature.jpg"
                  alt="My Signature"
                  className="signature-img"
                  crossOrigin="anonymous"
                />
              </div>
              <p className="signature-name">— Tumhara ❤️</p>
            </div>

            <div className="signature-block">
              <p className="signature-label">Her Signature</p>
              <div className="signature-area her-signature">
                <canvas
                  ref={canvasRef}
                  className="signature-canvas"
                  onMouseDown={startDraw}
                  onMouseMove={draw}
                  onMouseUp={stopDraw}
                  onMouseLeave={stopDraw}
                  onTouchStart={startDraw}
                  onTouchMove={draw}
                  onTouchEnd={stopDraw}
                />
                {!hasDrawn && (
                  <p className="signature-placeholder">Sign here ✍️</p>
                )}
              </div>
              <p className="signature-name">— Tumhari ❤️</p>
            </div>
          </div>

          {/* Final Note */}
          <div className="agreement-note">
            <p className="note-text ">
              "Galtiyan toh hoti hain, par pyaar mein maafi maangna aur maaf karna —
              yahi toh asli pyaar hai. I promise to be better, for you, for us. 🤍"

              Bsss ek baar aakhhri aaj k baad kbhi koi esi glti nhi karungaa glti karunga par esi nhi jo kabhi hurt kare plzzzzzz 
            </p>
          </div>
        </div>

        {/* Action buttons outside the screenshot area */}
        <div className="agreement-actions">
          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={!hasDrawn}
            style={{ opacity: hasDrawn ? 1 : 0.5 }}
          >
            {saved ? 'Saved! 💖' : 'Save Agreement 📸'}
          </button>

          <button
            className="btn-secondary"
            onClick={clearCanvas}
            style={{ marginTop: '8px' }}
          >
            Clear Signature
          </button>

          <button
            className="btn-primary"
            onClick={() => navigate('/hug')}
            style={{ marginTop: '4px' }}
          >
            One Last Surprise 🤗
          </button>
        </div>
      </div>
    </div>
  )
}
