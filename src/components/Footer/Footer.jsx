import React from 'react'
import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.200" w="100%" p={4} color="black">
      <Text textAlign="center">© 2024 書籍管理アプリ. All rights reserved.</Text>
    </Box>
  );
}

export default Footer;
