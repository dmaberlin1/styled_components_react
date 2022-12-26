import React from 'react';
import styled,{css,keyframes} from "styled-components";


const rotateAnimation=keyframes`
0%{
  transform: rotateZ(0deg);
}
  50%{
    
  }
    100%{
      transform: rotateZ(360deg);
    }
    
`


const StyledButton = styled.button.attrs(props=>({
  // outlined:true
}))`
  //.attr - можем задавать какие то дефолтные пропсы
  //например outlined:true
  border: none;
  padding: 10px 15px;
  font-size: 2rem;
  cursor: pointer;
  

  &:focus {
    outline: none;
  }
  &:hover{
    animation: ${rotateAnimation} 1s infinite linear;
  }

  align-self: ${props => props.align || 'stretch'};

  ${props => props.primary &&  css`
  color:${props => props.color || props.theme.colors.primary};
  background:${props => props.background || 'white'};
  `}
  
  ${props=>props.outlined && css`
    color:${props=>props.color ||'white'};
    border: 1px solid ${props=>props.color || 'white'};
    background: transparent;
    font-size: ${props=>props.fontSize || '2rem'};
    
  `}
`

const LargeButton=styled(StyledButton)`
font-size: 32px;

`





const Button = (props) => {
    return (
      <StyledButton {...props}>
          {/*{props.children}*/}
      </StyledButton>

    );
};

export default Button;
