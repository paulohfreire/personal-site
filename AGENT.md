# AGENT.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

This is an Angular personal website portfolio that preserves the HTML5 UP "Dimension" theme. It uses Angular Router with standalone page components for each portfolio section. The project uses a modular SCSS architecture with compiled CSS output.

## Architecture

### File Structure

```
assets/
├── css/           # Compiled CSS output (main.css)
├── sass/          # SCSS source files
│   ├── base/      # Foundation styles (reset, typography, page)
│   ├── components/# Reusable UI components (forms, buttons, icons, etc.)
│   ├── layout/    # Layout-specific styles (bg, wrapper, header, main, footer)
│   └── libs/      # Shared utilities (vars, functions, mixins, breakpoints)
└── webfonts/      # Font files

src/               # Angular app source
├── app/           # Standalone Angular shell, routes, and page components
├── index.html     # Angular document shell
└── main.ts        # Angular bootstrap entry point

angular.json       # Angular workspace configuration
images/            # Static image assets
```

### SCSS Architecture

The styles follow a modular architecture defined in `assets/sass/main.scss`:
1. **Libraries first**: `libs/` (variables, functions, mixins, breakpoints, vendor)
2. **Base styles**: `base/` (reset, page, typography)
3. **Components**: `components/` (form, box, icon, image, list, actions, icons, table, button)
4. **Layout**: `layout/` (bg, wrapper, header, main, footer)

Breakpoints are defined in both `libs/_breakpoints.scss` and `main.scss` with 6 levels: xxsmall, xsmall, small, medium, large, xlarge.

### Angular Pattern

The site uses standalone Angular components and native Angular Router. Key functionality:
- Route-based article navigation for `/intro`, `/work`, `/education`, and `/contact`
- Page content rendered through `router-outlet`
- Close articles via outside click, ESC key, or close button back to `/`
- Scroll restoration disabled for better UX during hash changes
- No jQuery dependency for navigation

### HTML Structure

The site shell is rendered by `AppComponent`. Each section page component renders its own `<article>` inside `#main` through Angular Router.

## Development Workflow

- Run `npm install` before using local tooling.
- Run `npm start` to serve the Angular app at `http://localhost:3000`.
- Run `npm run build` after editing SCSS source files in `assets/sass/`.
- Run `npm run check` before publishing changes.
- Edit the shell template in `src/app/app.component.html`.
- Edit page content in `src/app/pages/`.
- Edit route mappings in `src/app/app.routes.ts`.

## Key Considerations

- **SCSS Compilation**: Changes to `assets/sass/` files must be compiled to `assets/css/main.css` with `npm run build`
- **Angular Routing**: The site uses path routes for navigation (e.g., `/intro`, `/work`, `/education`, `/contact`). Pages are rendered by `router-outlet`
- **Angular Navigation**: Route mappings live in `src/app/app.routes.ts`
- **Responsive Design**: Comprehensive breakpoint system - test across all 6 breakpoint sizes
- **Article Visibility State**: The `body` class `is-article-visible` controls whether an article is currently showing
- **Animation Locking**: The `locked` field in `AppComponent` prevents concurrent article transitions

## Project Update Summary

1. **Repository baseline**: README and agent guidance now match the actual Angular project structure.
2. **Tooling setup**: `package.json` scripts compile SCSS, serve Angular locally, validate HTML, and build production output.
3. **Dependency review**: Runtime jQuery/browser/breakpoints scripts were removed; Font Awesome and theme SCSS remain vendored.
4. **Content refresh**: Portfolio content moved into `src/app/app.component.html`; metadata moved into `src/index.html`.
5. **Styling cleanup**: Site-specific `.courses` styles were moved from compiled CSS into `assets/sass/main.scss`.
6. **JavaScript modernization**: Navigation now uses Angular Router and does not use jQuery.
7. **Quality checks**: `npm run check` validates `src/index.html`, compiles SCSS, and builds Angular.
8. **Deployment documentation**: README documents publishing the generated `dist/personal-site/` output.

## Dependency Inventory

- `assets/css/fontawesome-all.min.css` and `assets/webfonts/`: Font Awesome Free 5.15.4
- `assets/sass/`: HTML5 UP Dimension theme styles

## Theme Attribution

Built on HTML5 UP's "Dimension" template (CCA 3.0 license). Header comments in `assets/sass/main.scss` and Angular metadata reference this.
