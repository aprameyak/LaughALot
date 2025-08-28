"use client";
export const dynamic = 'force-dynamic';
import NextDynamic from 'next/dynamic';
const ClerkProvider = NextDynamic(() => import('@clerk/nextjs').then(m => m.ClerkProvider), { ssr: false });
const SignIn = NextDynamic(() => import('@clerk/nextjs').then(m => m.SignIn), { ssr: false });
const SignedIn = NextDynamic(() => import('@clerk/nextjs').then(m => m.SignedIn), { ssr: false });
const SignedOut = NextDynamic(() => import('@clerk/nextjs').then(m => m.SignedOut), { ssr: false });
const UserButton = NextDynamic(() => import('@clerk/nextjs').then(m => m.UserButton), { ssr: false });
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [generatedJoke, setGeneratedJoke] = useState<string>('');
  const [topic, setTopic] = useState<string>('');

  const fetchJoke = async (): Promise<void> => {
    try {
      const requestOptions: RequestInit & { body?: string } = {
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

      const data: { message: string } = await response.json();
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
