import React from 'react';
import styled from 'styled-components'

const StyledTitle=styled.h1`
  
  
color:${props=>props.color || props.theme.colors.primaryTitle};
 line-height: 3rem; 
  letter-spacing: 0.6rem;
  margin-bottom: 1.5rem;
    
    
`

const Title = (props) => {
    return (
      <StyledTitle {...props}>
          {props.children}
      </StyledTitle>
    );
};

export default Title;
