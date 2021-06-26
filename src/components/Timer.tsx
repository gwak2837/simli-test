import { useState, useEffect, useRef } from 'react'

type Props = {
  onTimeout?: () => any
  seconds?: number
}

function Timer({ onTimeout, seconds }: Props) {
  const [counter, setCounter] = useState(seconds ?? 30)
  const timer = useRef<NodeJS.Timeout | undefined>()

  useEffect(() => {
    if (counter > 0) {
      timer.current = setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)
    } else {
      if (onTimeout) {
        onTimeout()
      }
    }
  }, [counter, onTimeout])

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  return <div>Timer {counter}</div>
}

export default Timer
