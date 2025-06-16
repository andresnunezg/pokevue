# Vue PokéAPI Application

A modern Vue.js application that showcases Pokémon information using clean architecture principles, efficient data management, and a robust testing strategy.

## 📁 Requirements

- Node.js 22
- pnpm package manager (equivalent)

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Create .env file from example
cp .env.example .env

# Run development server
pnpm dev

# Run tests
pnpm test:unit

# Build for production
pnpm build
```

## 📦 Core Dependencies

- Vue 3.5 - Progressive JavaScript framework
- Vue Query 5.80 - Server state management
- Pinia 3.0 - State management
- Vue Router 4.5 - Application routing
- TypeScript 5.8 - Type safety
- Vitest - Testing framework

## 🔑 Environment Setup

Create a `.env` file in the root directory with the following content:

```bash
VITE_API_URL=https://pokeapi.co/api/v2/
```

This configuration is required for the application to connect to the PokeAPI service.

## 🏗 Architecture

The project follows a clean architecture pattern divided into three main layers:

- **Domain**: Contains business logic, models, and interfaces (Pokemon, PokemonType, etc.)
- **Infrastructure**: Implements interfaces, handles external communication (API adapters, translators)
- **Presentation**: Manages UI components, controllers, and state management (Vue components, stores)

## 🧪 Testing Strategy

Tests follow the Given-When-Then pattern:
- **Given**: Set up the initial test state
- **When**: Execute the action being tested
- **Then**: Assert the expected outcomes

Example locations: `src/pokemons/domain/models/__tests__/` and `src/pokemons/presentation/components/__tests__/`

## 🔄 Data Management

### DataService

The `DataService` implements a repository pattern that:
- Provides a single point of data access
- Handles API communication abstractions
- Manages error handling consistently
- Enables easy testing through dependency injection

### Vue Query Benefits

- Implements infinite scrolling for large datasets
- Provides automatic background updates
- Manages disk caching for offline access
- Optimizes re-renders with smart cache invalidation

### Pinia Store

- Manages favorite Pokémon state across routes
- Provides reactive state management
- Enables persistent storage integration
- Maintains clean data flow between components
