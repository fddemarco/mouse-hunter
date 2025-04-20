import { useState, useEffect } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log(`State: ${enabled}`)
  })
  return (
    <>
      <h1>Mouse Hunter</h1>
      <buttom onClick={() => setEnabled(!enabled)}>Turn Effect {enabled ? 'on' : 'off'}</buttom>
    </>
  )
}

export default App
