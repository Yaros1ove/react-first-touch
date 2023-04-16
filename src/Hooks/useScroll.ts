import { Dispatch, SetStateAction, useEffect } from "react"





export default function useScroll(handle: Dispatch<SetStateAction<number>>): void {
  useEffect(() => {
    const handleScroll = () => {
      handle(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handle])
}