import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import styled,{createGlobalStyle,ThemeProvider} from 'styled-components'

const Global=createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas,serif;
  
  }
`

const theme={
    colors:{
        primary:'#26bca3',
        primaryTitle:'#09352d',
        secondary:'red'
    },
    media:{
        phone:'(max-width:425px)',
        tablet:'(max-width:786px) and (min-width: 425px)',
    }

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
      <Global></Global>
    <App />
  </ThemeProvider>
);

