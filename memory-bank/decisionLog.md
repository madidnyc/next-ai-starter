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

Use this document to record key decisions along with context, rationale, and implementation notes.