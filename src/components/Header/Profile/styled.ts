import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const ProfileWrapper = styled.aside`
  text-transform: lowercase;
`

export const ProfileItem = styled(AniLink)`
  cursor: pointer;
  display: block;
  height: auto;
  align-items: center;
  text-decoration: none;
`

export const SiteName = styled.h1`
  display: block;
  color: #fff;
  font-size: 2.8rem;
  transition: color 1s;
  font-family: 'Berkshire Swash', cursive;

  &:hover {
    color: #aa52cc;
  }
`
