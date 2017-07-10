import styled from 'styled-components';
import tinycolor from 'tinycolor2';

export default styled.div.attrs({
  className: 'dib ph3 pv3 bg-white br2 tc pointer w-100 black-60'
})`
  transition: background .15s ease-in;
  ${props => `
    background: ${props.theme.primary};
    &:hover {
      background: ${tinycolor(props.theme.primary).darken(5).toString()};
    }
  `}
`