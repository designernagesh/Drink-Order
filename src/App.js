import { useState } from 'react';
import { ChakraProvider, Button, useColorMode } from '@chakra-ui/react';
import Drinks from './components/Drinks';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const drinks = [
    { id: 1, name: 'Mojito', price: 30 },
    { id: 2, name: 'Beer', price: 20 },
    { id: 3, name: 'Red Wine', price: 15 },
    { id: 4, name: 'White Wine', price: 40 },
    { id: 5, name: 'Gin & Tonic', price: 80 },
    { id: 6, name: 'Tequila Shot', price: 100 },
  ]
  const [ total, setTotal ] = useState(0);
  const [ billPaid, setBillPaid ] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()

  const reloadHandler = () => {
    window.location.reload();
  }

  const payBillHandler = () => {
    setTotal(0)
    setBillPaid(true)
  }

  return (
    <ChakraProvider>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaMoon /> : <FaSun /> }
      </Button>
      <Drinks drinks={drinks} total={total} setTotal={setTotal} billPaid={billPaid} reloadHandler={reloadHandler} payBillHandler={payBillHandler} />
    </ChakraProvider>
  );
}

export default App;
