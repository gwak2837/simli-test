import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import { showWarningMessage } from 'src/utils/ant-design'

function useRedirectTo(url: string, when: boolean, showMessage?: string) {
  const router = useRouter()

  useEffect(() => {
    if (when) {
      if (showMessage) {
        // showWarningMessage(showMessage)
      }
    }
  }, [showMessage, when])

  useEffect(() => {
    if (when) {
      router.replace(url)
    }
  }, [router, url, when])
}

export default useRedirectTo
