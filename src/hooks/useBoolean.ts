import { MouseEvent, useCallback, useState } from 'react'

function useBoolean(): readonly [boolean | undefined, () => void, () => void]
function useBoolean(initialValue: boolean): readonly [boolean, () => void, () => void]

function useBoolean(initialValue?: boolean) {
  const [state, setState] = useState(initialValue)

  const toggleState = useCallback((e: MouseEvent) => {
    e.stopPropagation()
    setState((prev) => !prev)
  }, [])

  return [state, toggleState, setState] as const
}

export default useBoolean
