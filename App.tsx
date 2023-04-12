import * as React from 'react';
import { Box } from './Box';

export default function App() {
  return (
    <Box p={12}>
      <Box as="h1">Hello, Tailwind Converts!</Box>
      <Box as="p" marginTop={8}>
        Start editing to see some magic happen :)
      </Box>
    </Box>
  );
}
