# Chat-With-Pdf

Chat with a pdf document! Utilizes RAG (Retrieval Augmented Generation) to retrieve relevant context, then answers user question based on the provided context and chat history.

## Stack

- Framework: [Next.js](https://nextjs.org/) 14 (App Router)
- Chat functionality: [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction), [LangChain.js](https://js.langchain.com/docs/get_started/introduction)
- Generative model: [OpenAI](https://openai.com/)
- Vector database: [Pinecone](https://docs.pinecone.io/home)
- Component library: [shadcn/ui](https://ui.shadcn.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## Quickstart

### 1. Clone this repository

Run the following command to clone the repo:

```
git clone https://github.com/DraganAleksic99/chat-with-pdf.git
```

### 2. Install dependencies

```
cd chat-with-pdf
npm i
```

### 3. Fill out secrets

```
cp .env.example .env
```

### 4. Seed database

```
npm run seed
```

### 5. Run app locally

```
npm run dev
```

### Open in your browser

You can now visit http://localhost:3000.
