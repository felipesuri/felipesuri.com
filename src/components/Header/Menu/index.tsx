import React from 'react'
import { DonateHeart } from '@styled-icons/boxicons-solid'

import ToggleTheme from './ToggleTheme'

import * as S from './styled'

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      <S.MenuLinksItem>
        <S.MenuLinksLink
          cover
          direction="right"
          duration={0.6}
          bg="#373636"
          to="/donate"
          title="Faça uma doação"
          activeClassName="active"
        >
          <DonateHeart size={20} />
        </S.MenuLinksLink>
      </S.MenuLinksItem>

      <S.MenuLinksItem>
        <ToggleTheme />
      </S.MenuLinksItem>

      <S.MenuLinksItem>
        <a target="_blank" rel="noreferrer" href="https://github.com/felipesuri">
          <S.SiteIcon>F</S.SiteIcon>
        </a>
      </S.MenuLinksItem>
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
