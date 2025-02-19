# Functional Specifications

## 1. Initial Project Planning and Structure

### Marketing Site Phase Approach
- Build a single Next.js application that serves both the marketing site and the eventual full app.
- Implement marketing pages as top-level routes (e.g., "/", "/about", "/signup", "/book-a-demo", "/ai-practice-interview", "/search-talent", "/search-open-jobs") for clean and intuitive URLs.
- Organize marketing-specific pages within a dedicated folder (e.g., "src/app/marketing/") to maintain internal separation from future app logic.

### Project Directory Structure
```
project-root/
├── src/
│   ├── app/
│   │   ├── marketing/     # Marketing-specific pages
│   │   ├── dashboard/     # Reserved for future app pages
│   │   └── api/          # API routes for simulated backend
│   ├── components/       # Shared UI components
│   ├── lib/             # Utilities and shared types
│   └── styles/          # Additional styling
├── data/
│   └── mock/           # Dummy data JSON files
├── public/
│   ├── assets/         # General assets
│   └── images/         # Image files
├── tests/
│   ├── unit/          # Jest unit tests
│   ├── integration/   # Jest integration tests
│   └── e2e/           # Playwright end-to-end tests
└── docs/              # Project documentation
```

### Dummy Data and API Simulation
- Use Next.js API routes (under `src/app/api/`) to simulate backend interactions for "Search Talent" and "Search Open Jobs."
- Maintain dummy data in static JSON files (e.g., in a "data/mock/" directory) to easily transition to real backend data sources later.

### Waitlist Signup Implementation
- Implement a waitlist signup page that posts data to a Next.js API route, initially returning a simulated success message.
- This design provides a clear pathway for integrating with external email collection services in the future.

### Global Design and Consistency
- Marketing pages should share the same global layout and design components as the future app.
- Follow established design guidelines in the style guide (`/docs/style-guide.xml`), utilizing component libraries like Tailwind CSS and ShadCN as applicable.

### Testing and TDD Guidelines
- Adopt a test-driven development approach even in the marketing phase to maintain high quality and ease future enhancements.
- **Testing Structure:**
  - **Unit and Integration Tests:** Use Jest. Organize tests in a `tests/` directory with sub-folders (`tests/unit/` and `tests/integration/`).
  - **End-to-End Tests:** Use Playwright. Place these tests in `tests/e2e/`.

## 11. Architectural Considerations and Future Expansion

### Architectural Decisions
- **Unified Application:** Using a single Next.js application simplifies development, deployment, and eventual integration of full app features.
- **Routing Strategy:** Beginning with top-level routes offers simplicity. In future phases, consider nesting app-specific routes under a dedicated folder (e.g., "/app") to clearly separate marketing and application functionalities.
- **Separation of Concerns:** Internally segment the project for marketing and app features to promote maintainability and scalability.
- **Data Simulation:** Using API routes with static JSON files for dummy data provides a realistic development experience and simplifies migration to dynamic data sources.

### Future Expansion
- **Modular Development:** As the project transitions to a full application, progressively refactor components, API logic, and pages for enhanced modularity.
- **Enhanced Testing Coverage:** Expand your testing suite as more interactive and dynamic features are introduced.
- **Scalability Considerations:** Plan for infrastructure that supports both rapid prototyping (in the marketing phase) and robust enterprise features (in subsequent phases).

### Library Organization
- The `src/lib/` directory currently contains various utilities and services:
  - API-related logic (trpc, api/)
  - Authentication (auth/)
  - Email functionality (email/)
  - General utilities (utils.ts)
  - AI client integration (aiClient.ts)
  - Storage services (storage.ts)
- Future consideration: Further modularization of the lib directory may be implemented during the full app phase to enhance organization and maintainability.