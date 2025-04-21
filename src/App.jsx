import { useState, useEffect } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log(`State: ${enabled}`)
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  return (
    <main>
      <div
        className='tracker' style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          opacity: enabled ? 0.85 : 0
        }}
      />

      <h1>Mouse Hunter</h1>
      <button onClick={() => setEnabled(!enabled)}>Turn Effect {enabled ? 'off' : 'on'}</button>
    </main>
  )
}

export default App
