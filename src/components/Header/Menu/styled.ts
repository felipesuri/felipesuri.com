import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const MenuLinksWrapper = styled.nav`
  margin: auto;
  width: 100%;
`

export const MenuLinksList = styled.ul`
  align-items: center;
  display: inline-flex;
  justify-content: space-around;
  list-style: none;
`

export const MenuLinksItem = styled.li`
  margin: auto 0.6rem;
`

export const MenuLinksLink = styled(AniLink)`
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.5s;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    color: var(--purple);
  }

  &.active {
    color: var(--purple);
  }
`

export const SiteIcon = styled.p`
  color: #f2f2f2;
  transition: color 0.5s;
  font-family: 'Berkshire Swash', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;

  &:hover {
    color: var(--purple);
  }

  &.active {
    color: var(--purple);
  }
`
