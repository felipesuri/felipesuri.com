import styled from 'styled-components'

import * as V from 'styles/variables'

export const ToggleTheme = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  height: ${V.Space.default};
  width: 5rem;
  position: relative;

  background-color: ${V.Color.grayDark};
  border-radius: ${V.Space.default};
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:before,
  &:after {
    font-size: 18px;
    margin-top: 0.5px;
  }

  &:before {
    content: '🌜';
  }

  &:after {
    content: '🌞';
  }
`

export const ToggleThemeTrack = styled.div`
  --toggleTrack-size: 2.2rem;

  background-color: ${V.Color.grayWhite};
  border: ${V.Color.blue} solid 2px;
  border-radius: 50%;

  height: var(--toggleTrack-size);
  width: var(--toggleTrack-size);
  position: absolute;
  top: 1px;
  transition: transform ${V.Transition.default};

  .theme-light & {
    transform: translateX(0);
  }

  .theme-dark & {
    transform: translateX(100%);
  }
`
