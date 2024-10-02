"use client"
import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [generatedJoke, setGeneratedJoke] = useState('');
  const [topic, setTopic] = useState('');
  const fetchJoke = async () => {
    try {
      const requestOptions = {
        method: topic ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (topic) {
        requestOptions.body = JSON.stringify({ topic });
      }
      const response = await fetch('/api/chat', requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setGeneratedJoke(data.message);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedJoke('Failed to fetch joke. Please try again later.');
    }
  };

  return (
    <ClerkProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <SignedOut>
          <SignIn routing="hash" />
        </SignedOut>

        <SignedIn>
          <Box display="flex" alignItems="right" justifyContent="right">
            <header>
              <UserButton showName />
            </header>
          </Box>

          <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box color="primary.main" fontSize={72}>
        LaughALot
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextField
        label="Enter a topic"
        fullWidth
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={fetchJoke}>   
        Generate Joke
      </Button>

      <Box
        bgcolor="primary.main"
        color="white"
        borderRadius={16}
        p={3}
        marginTop={2}
      >
        {generatedJoke}
      </Box>
      </Box>
        </SignedIn>
      </Box>
    </ClerkProvider>
  );
}