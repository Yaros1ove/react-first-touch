import {ReactNode} from "react"

export type Props = {
  children?: ReactNode
  background?: string | Color
}

export type Color = {
  red: number,
  green: number,
  blue: number,
  opacity?: number,
}

export const background: Color = {
  red: 229,
  green: 229,
  blue: 229,
}