import styled from 'styled-components'
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;

`

function App() {
    //создать фцуию которая будет передавать значение в консоль

    return (
      <AppWrapper>
<Flex justify={'center'}>
    <Title color={'#09352d'}>console Linux system$ {<br/>}   user_one@localhost.localdomain:~</Title>

</Flex>
          <Flex direction={'column'} margin={'10px 0'}>
          <Console ></Console>
              <Button primary background={'black'} align={'flex-end'}>
                  send</Button>
              {/*<Button outlined fontSize={'0.9rem'} align={'center'} >clean</Button>*/}
          </Flex>
              <Flex></Flex>
      </AppWrapper>
    );
}

export default App;
