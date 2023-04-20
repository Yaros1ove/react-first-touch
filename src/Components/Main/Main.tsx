import classNames from 'classnames'
import { Props } from '../../Constants/types'

function Main({ children, bgColor, separateChildren, ...props }: Props) {
  return (
    <div className={classNames('main', `main_${bgColor}`)}>
      <div className='container'>{children}</div>
      {separateChildren &&
        <>
          <hr className='separateLine' />
          <div className='container_separator'>{separateChildren}</div>
        </>}
    </div>
  )
}

export default Main