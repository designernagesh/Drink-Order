import { useState } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Heading, Text, Button } from '@chakra-ui/react';

const SingleDrink = ({ drink, total, setTotal }) => {
    const [ order, setOrder ] = useState(false);

    const orderHandler = e => {
        setTotal( prevState => {
            return total = prevState + e
        })
        setOrder(true)
    }
    
    return (
        <Card direction={{ base: 'column' }} variant='outline' key={ drink.id }>
            <CardHeader>
                <Heading size='md'>{ drink.name }</Heading>
            </CardHeader>
            <CardBody py='0'>
                <Text color='blue.600' fontSize='2xl'>
                    Rs. { drink.price }/-
                </Text>
            </CardBody>
            <CardFooter>
                <Button onClick={ () => orderHandler( drink.price )}>
                    { order ? "Drink Ordered" : "Order Drink" }
                </Button>
            </CardFooter>
        </Card>
    )
}

export default SingleDrink;