import { useEffect } from 'react'

export default function Whitepaper() {
  useEffect(() => {
    window.location.replace('/whitepaper.pdf')
  }, [])

  return <div />
}
