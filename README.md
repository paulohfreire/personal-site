# Paulo H. Freire - Personal Website

Source code for [paulohof.com.br](https://paulohof.com.br), the personal website of Paulo Henrique de Oliveira Freire. The site is now a modern Angular application that preserves the HTML5 UP "Dimension" visual theme.

## Project Overview

- **Repository:** [paulohfreire/personal-site](https://github.com/paulohfreire/personal-site)
- **Live site:** [paulohof.com.br](https://paulohof.com.br)
- **Primary technologies:** Angular, TypeScript, HTML5, SCSS, CSS3
- **Theme:** HTML5 UP Dimension

## Getting Started

Install dependencies and run the Angular development server locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/paulohfreire/personal-site.git
   cd personal-site
   ```

2. **Install dependencies:** Ensure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This launches the site at `http://localhost:3000`.

## Development Commands

```bash
npm start          # Serve the Angular app locally
npm run build      # Compile SCSS and build Angular into dist/personal-site
npm run build:css  # Compile SCSS into assets/css
npm run watch:css  # Recompile CSS while editing SCSS
npm run check      # Validate HTML, compile CSS, and build Angular
```

## Project Structure

```text
personal-site/
├── assets/
│   ├── css/            # Compiled CSS output used by Angular
│   ├── sass/           # SCSS source files from the theme plus site additions
│   └── webfonts/       # Font Awesome font files
├── images/             # Static images and favicons
├── src/
│   ├── app/            # Angular standalone components, pages, and routes
│   ├── index.html      # Angular document shell and metadata
│   └── main.ts         # Angular bootstrap entry point
├── angular.json        # Angular workspace configuration
├── AGENT.md            # Repository guidance for AI agents
├── package.json        # Local development scripts and dependencies
└── README.md           # Project documentation
```

## Navigation

The previous jQuery-driven article navigation was migrated to Angular Router. Routes such as `/intro`, `/work`, `/education`, and `/contact` render standalone page components through `router-outlet`, while close/ESC/outside-click behavior returns to the home route.

## Vendored Assets

- `assets/css/fontawesome-all.min.css` and `assets/webfonts/`: Font Awesome Free 5.15.4
- `assets/sass/`: HTML5 UP Dimension SCSS source

## Features

- **Responsive design:** Optimized for desktops, tablets, and mobile devices.
- **Angular standalone app:** No NgModule boilerplate for the current portfolio.
- **Router-based navigation:** Uses Angular Router and standalone page components without jQuery.
- **Contact form:** Contact section backed by Formspree.

## Deployment

Build the production output before publishing:

```bash
npm run check
```

Deploy the generated `dist/personal-site/` directory to the static host configured for `paulohof.com.br`.

## License

The original HTML5 UP Dimension theme is licensed under the Creative Commons Attribution 3.0 license. See [LICENSE.txt](LICENSE.txt) and keep the HTML5 UP attribution visible.

## Contributing

Contributions are welcome. If you'd like to report a bug, suggest a feature, or improve documentation, please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you'd like to change.

## Contact

- **Email:** [paulo.freire53@gmail.com](mailto:paulo.freire53@gmail.com)
- **LinkedIn:** [linkedin.com/in/phfreire](https://www.linkedin.com/in/phfreire/)
- **GitHub:** [github.com/paulohfreire](https://github.com/paulohfreire/)
