import { 
  Box,
  Flex,
  Heading
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Flex minWidth='max-content' alignItems='center' gap='2' backgroundColor='#000000'>
      <Box p='2' margin='auto'>
        <Heading color='#FFFFFF'>DIO BANK APP</Heading>
      </Box>
    </Flex>
  )
}
