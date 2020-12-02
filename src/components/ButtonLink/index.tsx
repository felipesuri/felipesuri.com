import React from 'react'

import ComponentWithChildren from 'utils/component-with-children'

import * as S from './styled'

interface Props extends ComponentWithChildren {
  to: string
  direction: string
}

const ButtonLink = ({ children, to, direction }: Props) => (
  <S.ButtonLinkWrapper>
    <S.ButtonLink cover direction={direction} duration={0.6} to={to} bg="#373636">
      {children}
    </S.ButtonLink>
  </S.ButtonLinkWrapper>
)

export default ButtonLink
