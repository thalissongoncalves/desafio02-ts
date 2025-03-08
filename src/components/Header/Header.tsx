import './Header.css'
import { 
  Box,
  Flex,
  Heading
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>Dio Bank App</Heading>
      </Box>
    </Flex>
  )
}
