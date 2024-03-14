import React, { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <>
    <Header />
    <Box p={5}>
      <VStack spacing={8}>
        <BookForm onAddBook={handleAddBook} />
        <BookList books={books} />
      </VStack>
    </Box>
    <Footer />
    </>
  );
}

export default App;
