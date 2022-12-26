import React, {useState} from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole=styled.textarea`
  width: 100%;
  height: 56vh;
  background: black;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  border: none;
  resize: none;
  color: ${props => props.color || props.theme.colors.primary};

  &:focus {
    outline: none;
  }

  @media ${props => props.theme.media.phone} {
    border: 1px solid darkslategray;
  }
  @media ${props => props.theme.media.tablet} {
    border: 3px solid darkslategray;
  }

`

const Console = ({color,...props}) => {

    const [lines, setLines] = useState(['user_one@localhost.localdomain:~']);


    const onKeyPress=e=>{
        if(e.charCode===13){
            setLines([...lines,'user_one@localhost.localdomain:~'])
        }
    }
    // return (
    //   <StyledConsole {...props} value={`dmaberlin@localhost:~> ${props.children}`}>
    //
    //   </StyledConsole>
    // );
    return (
      <Flex>
          <Flex direction={'column'} margin={'0 10px'}>
              {lines.map(line=>
              <Line color={color}>{line}</Line>
              )}
          </Flex>
          <StyledConsole onKeyPress={onKeyPress} color={color} {...props}>

          </StyledConsole>
      </Flex>
    )
};

export default Console;
