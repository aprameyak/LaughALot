# **LaughALot**

LaughALot is a Generative AI-powered joke generator that delivers laughs on demand. Whether you enter a specific topic or leave it blank for a random joke, LaughALot uses OpenAI’s GPT-4 model via LangChain to generate the perfect punchline. The API is stateless, optimized with temperature, maxTokens, and top_p parameters for the funniest responses. Authentication is securely managed through Clerk, supporting email sign-ins or identity federation via Gmail. Continuous integration and delivery are ensured with GitHub Actions. The frontend interface, crafted with React.js and MaterialUI, delivers a smooth and enjoyable user experience, hosted on Vercel without the need for server management.

![React Badge](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![GitHub Actions Badge](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Vercel Badge](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Clerk Badge](https://img.shields.io/badge/Clerk-5C65F7?style=for-the-badge&logo=clerk&logoColor=white)

## Features

- **Generative Jokes**: Enter a topic or leave it blank for a random joke.
- **Ternary Requests**: GET or POST requests for delivering jokes based on user input.
- **Secure Authentication**: Sign in via email or identity federation (Gmail) using Clerk.
- **Continuous Delivery**: GitHub Actions for CI/CD, deploying to Vercel for production.
- **Optimized API Responses**: Temperature, maxTokens, and top_p settings fine-tuned for humor.

## Technology Stack

- **Frontend**: React.js, MaterialUI
- **Backend**: JavaScript (Node.js API)
- **AI Model**: OpenAI GPT-4 (via LangChain)
- **Authentication**: Clerk (Email/Gmail login)
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel

## Live Deployment

- **View here**: [LaughALot](https://laughalot.vercel.app/)

