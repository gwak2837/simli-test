import { useState, useEffect } from 'react'

type Props = {
  onTimeout?: () => any
  seconds?: number
}

function Timer({ onTimeout, seconds }: Props) {
  const [counter, setCounter] = useState(seconds ?? 30)

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)
    } else {
      onTimeout && onTimeout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  return <div>Timer {counter}</div>
}

export default Timer
