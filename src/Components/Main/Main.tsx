import classNames from 'classnames'
import { Props } from '../../Constants/types'

function Main({ children, bgColor, separator,  ...props }: Props) {
  return (
    <div className={classNames('main', `main_${bgColor}`)}>
      {separator && <hr className='separateLine' />}
      <div className='container'>{children}</div>
    </div>
  )
}

export default Main