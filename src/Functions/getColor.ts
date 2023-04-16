import { Color } from "../Constants/types"

export default function getColor(red: number, green: number, blue: number, opacity: number = 1): Color {
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}