
# AI-PDF-to-Notes 🤖📚

Transform PDF documents into interactive notes using AI-powered conversations. Built with modern web technologies and Gemini AI integration.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Online-green?style=for-the-badge&logo=vercel)](https://ai-pdf-note-taker-gray.vercel.app/)

## Features ✨

- **PDF Interaction** - Upload and chat with your PDF documents
- **AI-Powered Insights** - Get summaries and answers using Google's Gemini API
- **Conversation History** - Automatically saved chat sessions with your documents
- **Secure Authentication** - User management powered by Clerk
- **Real-time Database** - Built on Convex for seamless data synchronization
- **Responsive UI** - Modern interface built with Next.js 14

## Tech Stack 🛠️

- **Frontend**: Next.js 14 (App Router)
- **Backend**: Convex (Database & Server Functions)
- **Authentication**: Clerk
- **AI**: Gemini API
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

## Getting Started 🚀

### Prerequisites

- Node.js v18+
- Convex account
- Clerk account
- Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/AI-PDF-to-Notes.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create `.env.local` file with:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_url
GEMINI_API_KEY=your_gemini_key
```

4. Run the development server:
```bash
npm run dev
```

## Usage 📖

1. Sign up/Sign in using Clerk authentication
2. Upload your PDF document
3. Start chatting with your PDF:
   - Ask for summaries
   - Request specific information
   - Get key points and insights
4. View previous conversations in your chat history

## Contributing 🤝

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments 🙏

- Google Gemini API for AI capabilities
- Convex for real-time database functionality
- Clerk for secure authentication
- Vercel for hosting and deployment
```

