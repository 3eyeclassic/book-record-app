import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Textarea, VStack, Box } from '@chakra-ui/react';

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  
  const currentDate = new Date().toISOString().split('T')[0];
  
  const [readDate, setReadDate] = useState(currentDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, author, description, readDate });
    setTitle('');
    setAuthor('');
    setDescription('');
    setReadDate(currentDate); // フォームリセット後も現在の日付をデフォルト値とする
  };

  return (
    <Box width={{ base: "100%", md: "80%", lg: "60%" }} p={4}>
        <form onSubmit={handleSubmit}>
        <VStack spacing={3}>
            <FormControl isRequired>
            <FormLabel>タイトル</FormLabel>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
            <FormLabel>著者</FormLabel>
            <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </FormControl>
            <FormControl>
            <FormLabel>メモ</FormLabel>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <FormControl>
            <FormLabel>読了日</FormLabel>
            <Input
                id="readDate"
                type="date"
                value={readDate}
                onChange={(e) => setReadDate(e.target.value)}
            />
            </FormControl>
            <Button type="submit" colorScheme="teal">リストに追加</Button>
        </VStack>
        </form>
   </Box> 
  );
}

export default BookForm;
