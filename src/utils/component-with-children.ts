import { ReactElement } from 'react'

export default interface ComponentWithChildren {
  children: ReactElement | ReactElement[]
}
