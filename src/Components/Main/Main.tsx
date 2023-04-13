import { Props } from '../../Constants/types'

function Main({ children, background, ...props }: Props) {

  let style: object = {}
  if (typeof background === 'string') {
    style = {backgroundImage: `url(${background})`}
  } else if (typeof background === 'object') {
    const color = '#' + background.red.toString(16) + background.green.toString(16) + background.blue.toString(16)
    style = {backgroundColor: color}
  }

  return (
    <div className='main' style={style}>
      <div className='container'>{children}</div>
    </div>
  )
}

export default Main