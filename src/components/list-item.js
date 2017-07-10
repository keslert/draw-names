import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rubberBand as animation } from 'react-animations';
const bounceAnimation = keyframes`${animation}`;


const StyledItem = styled.div.attrs({
  className: 'pa3 ma2 f4 tc br2 flex flex-row items-center'
})`
  transition: opacity 0.3s;
  ${props => `
    background: ${props.theme.light};
    color: ${props.theme.text};
    opacity: ${props.hide ? 0.2 : 1};
    ${props.bounce && `animation: 0.5s ${bounceAnimation};`};
  `};
`;

const StyledBadge = styled.div.attrs({
  className: 'tc br-pill ml2 f6',
})`
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  transition: background 0.5s;
  ${props => `
    background: ${props.highlight ? props.theme.danger : props.theme.text};
    color: ${props.theme.light};
  `};
`;

class Item extends React.PureComponent {

  constructor() {
    super();
    this.state = { bounce: false }
  }

  componentWillReceiveProps(props) {
    // if(props.entries != this.props.entries) {
    //   this.setState({bounce: true});
    //   clearTimeout(this.handle);
    //   this.handle = setTimeout(() => this.setState({bounce: false}), 500);
    // }
  }

  render() {
    const { name, priority, group } = this.props;
    const { bounce } = this.state;
    return (
      <StyledItem bounce={bounce}>
        {name} <StyledBadge highlight={bounce}>{group}</StyledBadge>
      </StyledItem>      
    )
  }
}

export default Item;