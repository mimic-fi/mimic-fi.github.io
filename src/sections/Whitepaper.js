import { useEffect } from 'react'

export default function Whitepaper() {
  useEffect(() => {
    window.location.replace('https://mimic.fi/whitepaper.pdf')
  }, [])

  return <div />
}
