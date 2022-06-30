import { useEffect, useState } from 'react'
import axios from 'axios'
import numeral from 'numeral'
import { useRandomInterval } from '../hooks/useRandomInterval'

export const ValueLocked = () => {
  const [tvl, setTvl] = useState('loading')
  const generalFormat = '$0,0.00'

  const url = 'https://firestore.googleapis.com/v1beta1/projects/apy-mimic/databases/(default)/documents/tvl/tvl'
  const fn = (n) => {
    return numeral(n).format(generalFormat)
  }
  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const ot = localStorage.getItem('t')
      const otts = localStorage.getItem('tts')
      const data = await axios.get(url)
      const tts = data?.data?.fields?.updatedAt?.timestampValue
      const t = data?.data?.fields?.value?.stringValue
      if (ot) {
        if (otts === tts) {
          setTvl(fn(ot))
        } else {
          setTvl(fn(t))
          localStorage.setItem('tts', tts)
        }
      } else {
        setTvl(fn(t))
        localStorage.setItem('tts', tts)
      }
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error)
  }, [])

  const delay = [4000, 9000]

  useRandomInterval(() => transmute(), ...delay)

  const transmute = () => {
    if (tvl !== 'loading') {
      const added = Math.random()
      const nt = numeral(tvl).add(added).format(generalFormat)
      setTvl(nt)
      localStorage.setItem('t', nt)
    }
  }

  return (
    <>
      <div>{tvl}</div>
    </>
  )
}
