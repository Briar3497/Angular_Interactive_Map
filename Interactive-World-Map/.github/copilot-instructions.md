# Copilot Instructions for Interactive World Map Project

## Project Overview
This project is an Angular application designed to visualize data on an interactive world map. The architecture is modular, with components organized by functionality, allowing for easy maintenance and scalability.

## Key Components
- **SVG Component**: Located in `src/app/svg/svg.ts`, this component is responsible for rendering the SVG elements of the map. It utilizes Angular's component architecture to encapsulate functionality and styles.
- **Routing**: The routing configuration is defined in `src/app/app.routes.ts`, which maps the path `/Map` to the `SVG` component. This allows users to navigate to the map view seamlessly.

## Developer Workflows
- **Building the Project**: Use the command `npm start` to build and serve the application locally. This command compiles the TypeScript files and starts a development server.
- **Running Tests**: Execute `npm test` to run unit tests. Ensure that tests are written for each component to maintain code quality.
- **Debugging**: Utilize the browser's developer tools to debug the application. Set breakpoints in TypeScript files to inspect component behavior during runtime.

## Project Conventions
- **Component Structure**: Each component should have its own directory containing the TypeScript file, HTML template, and CSS styles. This structure promotes organization and clarity.
- **Naming Conventions**: Use PascalCase for component names (e.g., `SVGComponent`) and kebab-case for file names (e.g., `svg.component.ts`).

## Integration Points
- **External Dependencies**: The project relies on Angular's core libraries. Ensure that the Angular CLI is installed and up to date.
- **Cross-Component Communication**: Use Angular services for shared state management between components. This approach helps maintain a clean separation of concerns and enhances testability.

## Examples
- To create a new component, use the Angular CLI command: `ng generate component <component-name>`.
- For routing, ensure that each route is defined in `app.routes.ts` and corresponds to a valid component.

## Conclusion
These instructions aim to provide a foundational understanding of the project structure and workflows. For further details, refer to the individual component files and the Angular documentation.