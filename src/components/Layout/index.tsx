import React from 'react'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import ComponentWithChildren from 'utils/component-with-children'

import GlobalStyles from 'styles/global'
import Header from 'components/Header'
import Footer from 'components/Footer'
import BottomBar from 'components/BottomBar'

import * as S from './styled'

const Layout = ({ children }: ComponentWithChildren) => (
  <S.LayoutWrapper>
    <GlobalStyles />

    <TransitionPortal level="top">
      <Header />
    </TransitionPortal>

    <S.LayoutMain>
      {children}
      <Footer />
    </S.LayoutMain>

    <TransitionPortal level="bottom">
      <BottomBar />
    </TransitionPortal>
  </S.LayoutWrapper>
)

export default Layout
