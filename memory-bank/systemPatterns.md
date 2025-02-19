## System Patterns

### Directory Structure Patterns

1. **Feature-based Organization**
   ```
   src/app/
   ├── marketing/     # Marketing site features
   ├── app/          # Core application features
   └── api/          # API routes
   ```
   - Each major feature area gets its own top-level directory
   - Clear separation between marketing and app functionality
   - API routes centralized in api/ directory

2. **Mock Data Pattern**
   ```
   data/mock/
   ├── talent.json    # Mock talent profiles
   └── jobs.json      # Mock job listings
   ```
   - Separate JSON files for different data types
   - Structured to mirror future API responses
   - Served through Next.js API routes to simulate real backend

3. **Testing Organization**
   ```
   tests/
   ├── unit/         # Component and utility tests
   ├── integration/  # Feature integration tests
   └── e2e/          # End-to-end user flows
   ```
   - Clear separation between test types
   - Mirrors production code organization
   - Follows AAA (Arrange, Act, Assert) pattern

4. **Documentation Structure**
   ```
   ./
   ├── projectBrief.md              # Business overview
   ├── functional_specifications.md  # Technical details
   └── memory-bank/                 # Project memory
   ```
   - Clear separation between business and technical documentation
   - Memory Bank for tracking project evolution
   - Living documentation that evolves with the project

### Code Organization Patterns

1. **Library Structure**
   ```
   src/lib/
   ├── api/          # API-related logic
   ├── auth/         # Authentication
   ├── email/        # Email functionality
   ├── trpc/         # tRPC setup
   └── zod/          # Schema validation
   ```
   - Domain-specific functionality in dedicated directories
   - Clear separation of concerns
   - Modular and maintainable

2. **Asset Organization**
   ```
   public/
   ├── assets/       # General assets
   └── images/       # Image files
   ```
   - Organized by asset type
   - Clear separation for easier management
   - Structured for scalability

This file will be updated with recurring design patterns, architectural decisions, and common code patterns as the project evolves.