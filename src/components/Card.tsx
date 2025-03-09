import { 
  Center,
  Input,
  Box,
  Heading,
} from '@chakra-ui/react'
import { welcome } from '../services/welcome';
import { Button } from './Button/Button';

export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center marginBottom='10px'>
          <Heading size='md'>Faça o login</Heading>
        </Center>
        <Input placeholder="email" marginBottom='10px' />
        <Input placeholder="password"/>
        <Center>
          <Button event={welcome}></Button>
        </Center>
      </Box>
    </Box>
  )
}