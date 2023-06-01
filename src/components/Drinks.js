import SingleDrink from './SingleDrink';
import { Container, Heading, Button, SimpleGrid, Flex} from '@chakra-ui/react';

const Drinks = ({ drinks, total, setTotal, billPaid, reloadHandler, payBillHandler }) => {
    return (
        <Container maxW='2xl'>
            <Heading as='h1' align="center" color="blue.500" mb={3}>Drink Order</Heading>

            <SimpleGrid alignItems="center" mb='20px' spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {
                    drinks.map(drink => <SingleDrink drink= { drink } setTotal={ setTotal } /> )
                }
            </SimpleGrid>

            <Flex justifyContent='center' flexDirection='column'>
                { total > 0 && 
                    <>
                        <Heading as='h2' align="center" fontSize='21px' mb='20px'> { `Total Amount: ${total}` } </Heading>

                        <Flex justifyContent='center'>
                            <Button onClick={ reloadHandler } colorScheme='teal' mr='5px'>
                                Reload
                            </Button>

                            <Button onClick={ payBillHandler } colorScheme='teal'>
                                { billPaid ? "Bill Paid" : "Pay Bill" }
                            </Button>
                        </Flex>
                    </>
                }
            </Flex>
            
        </Container>
    )
}

export default Drinks;
