import React from 'react'

import Menu from './Menu'
import Profile from './Profile'

import * as S from './styled'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderGroup>
        <Profile />
      </S.HeaderGroup>

      <S.HeaderGroup>
        <Menu />
      </S.HeaderGroup>
    </S.HeaderWrapper>
  )
}

export default Header
