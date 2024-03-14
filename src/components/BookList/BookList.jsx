import { Box, List, ListItem, Text, VStack } from '@chakra-ui/react';

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <Text>書籍を追加して下さい</Text>;
  }

  return (
    <List spacing={5}>
      {books.map((book, index) => (
        <ListItem key={index}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} boxShadow="md" bg="white">
            <VStack align="start" spacing={3}>
              <Text fontSize="xl" fontWeight="bold">{book.title}</Text>
              <Text>著者: {book.author}</Text>
              <Text>メモ: {book.description}</Text>
              <Text>読了日: {book.readDate}</Text>
            </VStack>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}


export default BookList