# Next.js Portfolio Website Development Guidelines

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export as static site

## Code Style Guidelines
- **Imports**: Use absolute imports with `@/` alias (e.g., `@/components/Button`)
- **TypeScript**: Use strict type checking and explicit return types
- **Components**: Use functional components with React hooks
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Styling**: Use Tailwind CSS with custom theme extensions
- **Structure**: Keep components in `/src/components`, pages in `/app`
- **State Management**: Use React hooks (useState, useEffect, useContext)
- **Animation**: Use Framer Motion for animations
- **Error Handling**: Use try/catch blocks and appropriate error boundaries
- **Responsiveness**: Design mobile-first with Tailwind breakpoints

## Project Structure
- Follow Next.js App Router structure
- Component files should be self-contained and focused
- Import order: React, external libraries, internal components/utilities