import React from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

const StyledTextArea = styled.textarea.attrs({
  className: 'pa2 w-100 b--none bg-white-40 white-80 br2'
})`
  resize: none;
  outline: none;
`

class TextArea extends React.Component {

  componentWillMount() {
    this.onChange = debounce(value => {
      this.props.onChange(value);
    }, 500);
  }
  
  render() {
    const { value } = this.props;
    return (
      <StyledTextArea rows={20} value={value} onChange={(e) => this.onChange(e.target.value)} />
    )
  }
}

export default TextArea;