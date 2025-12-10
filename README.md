# My News App

A simple news viewer application built for a technical assignment. This app allows users to browse top headlines from around the world, filter news by category, search by keyword, and view detailed article information in a modal dialog.

## Features

- **Category Filtering** - Browse news by predefined categories (business, technology, sports, etc.)
- **Keyword Search** - Search for specific topics across all news articles
- **News Details Dialog** - View full article details in a modal without leaving the main page
- **Responsive Layout** - Works seamlessly across desktop and mobile devices
- **Fallback Image Handling** - Graceful handling of missing article images
- **Loading & Error States** - Proper feedback during data fetching and error scenarios

## Tech Stack

- **React** (Vite) - Modern React with fast HMR
- **TypeScript** - Type-safe development
- **TanStack Query** - Server state management and data fetching
- **shadcn/ui** - High-quality, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - Client-side state management for filters and UI state
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   └── ...
├── context/          # React Context providers
│   ├── news-filters/ # Search and category filter state
│   └── news-details/ # Modal dialog state
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── api/              # API client and fetch functions
├── lib/              # Utility functions
├── types/            # TypeScript type definitions
└── constants/        # App constants
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_newsapi_key_here
```

Get your API key from [NewsAPI.org](https://newsapi.org/).

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Environment Variables

The application requires the following environment variable:

- `VITE_API_KEY` - Your NewsAPI.org API key for fetching news data

Create a `.env` file in the project root and add your API key:

```env
VITE_API_KEY=your_newsapi_key_here
```

## Architecture Notes

The application follows a clean separation of concerns:

- **Home Page** - Acts as a declarative container that orchestrates UI components
- **Context Providers** - Encapsulate business logic and state management (filters, dialog state)
- **TanStack Query** - Handles all server-state, caching, and data synchronization
- **UI Components** - Remain stateless and reusable, receiving data via props

This architecture ensures maintainability, testability, and clear data flow throughout the application.

## Why Modal Instead of Dedicated Route?

The news details are displayed in a modal dialog rather than a dedicated route for several reasons:

- **Simpler UX** - Users can quickly preview articles without losing their place in the news list
- **Test Requirements** - Matches the technical assignment specifications
- **API Limitations** - NewsAPI doesn't provide stable article IDs, making deep linking to individual articles unreliable and prone to stale data issues

## License

MIT
