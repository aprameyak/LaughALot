LaughALot is a Generative AI Powered joke generator ready to deliver laughs on demand. Users can enter topics or leave the field blank to get a joke about a specified or general topic. This is done by a ternary GET or POST requests to the Javascript API that then go to the OpenAI API for the GPT-4o foundational model via LangChain. The API is stateless and was tested thoroughly using Postman. Model parameters for temperature and top_p are configured for optimal responses for the funniest jokes. Clerk secure authentication supports users to log in using email or identity federation via gmail. GitHub actions are integrated to provide continuous integration and continuous delivery to the production environment. The Next.js app was hosted on Vercel via the laughalot.vercel.app domain without managing a server. The front end user interface was crafted using MaterialUI and React.js to create a simple, yet effective experience.
