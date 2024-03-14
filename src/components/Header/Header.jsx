import React from 'react'

import { Box, Text, Flex } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="teal.500" w="100%" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">書籍管理アプリ</Text>
        {/* ナビゲーションリンクや追加の要素をここに挿入できます */}
      </Flex>
    </Box>
  );
}

export default Header;