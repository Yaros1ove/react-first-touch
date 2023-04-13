import { Props } from '../../Constants/types'

function Main({ children, background, ...props }: Props) {

  console.log(`url(${background})`)
  return (
    <div className='main' style={{backgroundImage: `url(${background})`}}>
      <div className='container'>{children}</div>
    </div>
  )
}

export default Main