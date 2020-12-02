import styled from 'styled-components'

import * as V from 'styles/variables'

interface ButtonProps extends HTMLButtonElement {
  active: boolean
}

export const ToggleTheme = styled.button.attrs(({ active }: ButtonProps) => ({
  title: active ? 'Mudar para tema escuro' : 'Mudar para tema claro',
  role: 'button',
  'aria-pressed': !active,
}))<ButtonProps>`
  align-items: center;
  background-color: ${V.Color.grayDark};
  border-radius: ${V.Space.default};
  cursor: pointer;
  display: inline-flex;
  height: ${V.Space.default};
  justify-content: space-between;
  padding-left: 2px;
  padding-right: 2px;
  position: relative;
  width: ${V.Space.lg};
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
  --toggleTrack-size: 22px;
  background-color: ${V.Color.grayWhite};
  border: ${V.Color.blue} solid 2px;
  border-radius: 50%;
  height: var(--toggleTrack-size);
  position: absolute;
  top: 1px;
  transition: transform ${V.Transition.default};
  width: var(--toggleTrack-size);
  .theme-light & {
    transform: translateX(0);
  }
  .theme-dark & {
    transform: translateX(100%);
  }
`
