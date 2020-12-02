import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderWrapper = styled.aside`
  width: 100%;
  padding: 1rem 0;
  top: 0;
  display: flex;
  position: fixed;
  justify-content: space-between;

  opacity: 0.9;
  background: #070708;
  text-transform: lowercase;
`

export const HeaderGroup = styled.div`
  display: flex;
  margin: auto 10rem;
  align-items: center;

  ${media.lessThan('large')`
    margin: auto 3rem;
  `}
`
