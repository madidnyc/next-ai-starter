## Decision Log

### 2025-02-19 - Project Structure Organization

**Context:** 
Needed to establish a directory structure that supports both the immediate marketing site phase and future app development.

**Decisions:**
1. **Unified Application Structure**
   - Decision: Use a single Next.js application for both marketing site and future app
   - Rationale: Simplifies development, deployment, and maintenance
   - Implementation: Set up src/app/ as the main directory with clear subdirectories

2. **App Directory Organization**
   - Decision: Create src/app/app/ as parent directory for all future app features
   - Rationale: Provides clear separation between marketing and app features while maintaining logical grouping
   - Implementation: All future app features (like dashboard) will live under src/app/app/

3. **Mock Data Strategy**
   - Decision: Use static JSON files in data/mock/ directory served via Next.js API routes
   - Rationale: Simulates real API interactions while maintaining flexibility for future backend integration
   - Implementation: Created talent.json and jobs.json with realistic dummy data

4. **Documentation Separation**
   - Decision: Maintain clear separation between business (projectBrief.md) and technical (functional_specifications.md) documentation
   - Rationale: Keeps concerns separated and makes documentation easier to maintain and update
   - Implementation: Updated functional_specifications.md with technical details while keeping projectBrief.md focused on business aspects

5. **Testing Structure**
   - Decision: Implement comprehensive testing structure from the start
   - Rationale: Ensures quality and maintainability as the project grows
   - Implementation: Created separate directories for unit, integration, and e2e tests

6. **Optional Lib Directory Modularization**
   - Decision: Postpone further modularization of src/lib/ directory
   - Rationale: Current structure works well; modularization could break existing imports
   - Implementation: Will revisit during full app phase when more utilities and services are added

### 2025-02-19 - Component Organization

**Context:**
Needed to establish a clear organization structure for components that supports both marketing site and future app development while maintaining clear separation of concerns.

**Decisions:**
1. **Component Directory Structure**
   - Decision: Create separate directories for marketing and app components
   - Rationale: Clear separation of concerns, easier maintenance, and better scalability
   - Implementation: 
     - Created src/components/marketing/ for marketing components
     - Created src/components/app/ for app components
     - Further subdivided marketing components by page/section (e.g., homepage/)

2. **Test File Organization**
   - Decision: Mirror component directory structure in test files
   - Rationale: Makes it easy to locate tests and maintain relationship between components and their tests
   - Implementation:
     - Created tests/unit/marketing/ directory
     - Organized test files to match component structure
     - Example: tests/unit/marketing/homepage/HeroSection.test.tsx matches src/components/marketing/homepage/HeroSection.tsx

3. **Documentation Updates**
   - Decision: Document component organization in functional specifications
   - Rationale: Ensures consistent implementation and helps onboard new developers
   - Implementation: Updated functional_specifications.md with detailed component organization structure

### 2025-02-19 - Testing Strategy for Styled Components

**Context:**
Needed to establish a reliable approach for testing components styled with Tailwind CSS.

**Decisions:**
1. **Style Testing Approach**
   - Decision: Test for Tailwind class names instead of computed styles
   - Rationale: 
     - More reliable than testing computed styles which can vary across browsers
     - Directly tests what we control (class names) rather than browser computations
     - Easier to maintain as tests won't break with minor style adjustments
   - Implementation:
     - Updated test files to use toHaveClass() instead of toHaveStyle()
     - Test for specific Tailwind classes that define styling
     - Example: test for 'text-[48px]' class instead of { fontSize: '48px' }

2. **Test Organization**
   - Decision: Group style-related tests with other component tests
   - Rationale: Keeps all component-related tests together for better maintainability
   - Implementation:
     - Include style assertions within component test files
     - Test both functionality and styling in the same describe block

Use this document to record key decisions along with context, rationale, and implementation notes.