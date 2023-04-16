import {ReactNode} from "react"


export type Color = `rgba(${number}, ${number}, ${number}, ${number})`
export type Props = {
  children?: ReactNode,
  bgColor?: string,
  brandLogo?: string
  separator?: boolean
}

export const background: Color = 'rgba(229, 229, 229, 1)'
export const white: Color = 'rgba(255, 255, 255, 1)'
export const accent: Color = 'rgba(33, 33, 33, 1)'

export enum BGColors {
  White = 'white',
  Black = 'white',
  Accent = 'accent',
  Top = 'top',
}