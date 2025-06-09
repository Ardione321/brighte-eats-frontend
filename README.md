
# Brighte Eats Frontend

This is the frontend application for the Brighte Eats project built with Next.js 15, using the new `src/app` router, Apollo Client for GraphQL data fetching, and styled with shadcn/ui components.

## ✨ Features

- Display list of customer leads fetched via GraphQL
- View details of individual leads
- Create new leads with service selections
- Responsive UI built with Tailwind CSS and shadcn/ui components
- Integration with NestJS GraphQL backend API

## 🚀 Tech Stack

- [Next.js 15](https://nextjs.org/) with the new [`src/app` directory routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL queries and mutations
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) for reusable UI components
- [React 18+](https://reactjs.org/)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Yarn or npm
- Running instance of the Brighte Eats backend GraphQL API

## ⚙️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Ardione321/brighte-eats-frontend.git
   cd brighte-eats-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:

   Create a `.env.local` file at the root of the project:

   ```env
   NEXT_PUBLIC_GRAPHQL_API_URL=http://localhost:3000/graphql
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to [http://localhost:3001](http://localhost:3001)

## 🗂 Project Structure

```
src/
 ├─ app/                 # Next.js app directory (pages, layout, components)
 ├─ components/          # Reusable React components (e.g. UI, providers)
 ├─ lib/                 # Library code (e.g. Apollo client setup)
```

## Usage

- Navigate to `/leads` to view all leads
- Use the Create Lead page to add new customer leads
- Leads data is fetched and mutated using Apollo Client GraphQL operations


## License

MIT License © 2025 Ardione David
