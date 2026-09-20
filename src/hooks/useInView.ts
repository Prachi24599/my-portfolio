import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = {
  threshold?: number
  once?: boolean
}

function useInView<T extends Element>(options: UseInViewOptions = {}) {
  const { threshold = 0.15, once = true } = options
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return
        }

        if (entry.isIntersecting) {
          setIsInView(true)

          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, threshold])

  return { ref, isInView }
}

export default useInView
