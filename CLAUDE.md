# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website for Quế Xuân Mạnh, an AI Engineer Intern. The site showcases projects, skills, and experience with an interactive AI chatbot powered by Google's Gemini AI. The project is built with modern React, TypeScript, and Vite, featuring a futuristic design with particle effects and glass morphism UI.

## Architecture

### Core Technologies
- **React 19.2.0** with TypeScript
- **Vite 6.2.0** for build tooling and development server
- **Tailwind CSS** (via CDN) for styling
- **Google Gemini AI** (`@google/genai`) for chatbot functionality
- **Lucide React** for icons

### Project Structure
```
/
├── components/          # React components
│   ├── App.tsx         # Duplicate of main App (can be ignored)
│   ├── AboutSection.tsx
│   ├── ChatBot.tsx     # Interactive AI chatbot with Gemini integration
│   ├── ExperienceSection.tsx
│   ├── Hero.tsx        # Landing section with CTA and navigation
│   ├── ParticleBackground.tsx
│   ├── ProjectsSection.tsx
│   └── SkillsSection.tsx
├── services/
│   └── geminiService.ts # Gemini API integration layer
├── App.tsx             # Main application component
├── constants.ts        # Project data, profile info, and system prompts
├── types.ts            # TypeScript type definitions
├── index.tsx           # React DOM entry point
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── index.html          # HTML template with Tailwind config
```

### Key Components Architecture

#### ChatBot Component
- **State Management**: Local state for messages, input, loading states
- **Gemini Integration**: Uses `sendMessageToGemini` service
- **Features**: Typewriter effect, message history, error handling
- **Styling**: Glass morphism design with blur effects

#### Data Flow
1. **Constants**: All project data, profile info, and skill categories stored in `constants.ts`
2. **Types**: Centralized TypeScript interfaces in `types.ts`
3. **Services**: API abstraction layer in `services/geminiService.ts`
4. **Components**: Modular React components with clear separation of concerns

### Gemini AI Integration
- **API Key**: Hardcoded in `geminiService.ts` (line 6) - should be moved to environment variables
- **System Prompt**: Comprehensive persona and technical documentation in `constants.ts`
- **Model**: Uses `gemini-flash-latest` with custom system instruction
- **Features**: Conversation history context, temperature control (0.7), max tokens (2000)

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (runs on localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Workflow
1. The development server automatically reloads on file changes
2. The app uses Vite's HMR (Hot Module Replacement) for fast development
3. TypeScript strict mode is enabled for type safety

## Key Configuration Files

### Vite Configuration (`vite.config.ts`)
- **Base**: Set to `/` for proper asset loading
- **Server**: Runs on port 3000, host `0.0.0.0`
- **Plugins**: React plugin with Fast Refresh
- **Environment Variables**: `GEMINI_API_KEY` is injected into `process.env`
- **Path Aliases**: `@/` maps to project root

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2022 with experimental decorators enabled
- **Module**: ESNext with bundler resolution
- **JSX**: React-JSX transform
- **Path Mapping**: `@/*` maps to `./`
- **Strict Mode**: Type checking enabled

## Styling System

### Tailwind Configuration
- **Custom Fonts**: Cinzel (display), Playfair Display (serif), Inter (sans-serif)
- **Color Scheme**: Dark theme with blue accents (`#4a6fa5`)
- **Animations**: Custom animations for spin-slow, pulse-slow, scan effects
- **Glass Panels**: Custom utility class with backdrop blur and transparency

### CSS Custom Properties
- Custom scrollbar styling
- Glass morphism effects with backdrop-filter
- Custom keyframes for animations

## Important Implementation Details

### Environment Setup
The application expects a `GEMINI_API_KEY` environment variable. Currently, it's hardcoded in `geminiService.ts` but should be moved to a `.env.local` file for security.

### Content Management
- **Projects**: All project data including blog content is in `constants.ts`
- **Blog Content**: HTML strings stored directly in constants (consider moving to markdown files)
- **Skills**: Organized by categories with flat array available

### Performance Considerations
- **Bundle Size**: Uses CDN for Tailwind CSS to avoid build-time processing
- **Images**: Some images referenced from `/public` directory
- **Font Loading**: Preconnect to Google Fonts for performance

### Known Issues & Improvements
1. **Security**: API key should be in environment variables, not hardcoded
2. **Duplicate Files**: `components/App.tsx` is a duplicate of root `App.tsx`
3. **Content Management**: Consider moving blog content from constants to separate files
4. **SEO**: Limited meta tags and accessibility features

## Testing
No test framework is currently configured. Consider adding:
- **Vitest** for unit testing
- **React Testing Library** for component testing
- **Playwright** or **Cypress** for E2E testing

## Deployment
The build output is optimized for static hosting. The `preview` command serves the production build locally for testing before deployment.