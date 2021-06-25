import { useState, useEffect } from 'react'

type Props = {
  onTimeout?: () => any
}

function Timer({ onTimeout }: Props) {
  const [counter, setCounter] = useState(30)

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)
    } else {
      onTimeout && onTimeout()
    }
  }, [counter])

  return <div>Timer {counter}</div>
}

export default Timer
