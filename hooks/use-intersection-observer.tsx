"use client"

import { useState, useEffect, type RefObject } from "react"

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = {
    threshold: 0,
    root: null,
    rootMargin: "0px",
  },
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const [hasIntersected, setHasIntersected] = useState<boolean>(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, options, hasIntersected])

  return { isIntersecting, hasIntersected }
}
