import { ChangeEvent, useCallback, useState } from 'react'

type Options = {
  initialValue?: unknown
}

function useInput({ initialValue }: Options) {
  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return [value, handleChange] as const
}

export default useInput
