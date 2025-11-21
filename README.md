# Jonah Jacobsen - Portfolio Website

A modern, responsive personal portfolio website showcasing technical skills, professional projects, and contact information. Built with React and Vite, featuring smooth animations and both development and production workflows.

## 🚀 Development Workflow

### Installation

This project requires Node.js. Install it using mise:

```bash
# Install Node.js (includes npm)
mise install

# Verify installation
node --version
npm --version
which node
mise ls
```

### Package Management

After installing Node.js, you can manage dependencies using npm:

```bash
# Install all dependencies
npm install

# Add a new dependency
npm install <package-name>

# Add a development dependency
npm install --save-dev <package-name>

# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities automatically
npm audit fix
```

### Code Quality

```bash
# Run ESLint to check for code issues
npm run lint

# Run ESLint and automatically fix fixable issues
npm run lint:fix

# Run all pre-commit checks manually
pre-commit run -a
```

## 🛠 Technology Stack

- **React** - UI framework with hooks and modern patterns
- **Vite** - Fast build tool and development server with HMR
- **Framer Motion** - Smooth animations and page transitions
- **React Icons** - Comprehensive icon library (Font Awesome, Simple Icons)
- **Docker** - Multi-stage containerization for development and production
- **Nginx Alpine** - High-performance production web server with caching
- **ESLint** - Code linting with React-specific rules
- **Prettier** - Code formatting via pre-commit hooks
- **Node.js** - Runtime environment for prod

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Check what's using the port
lsof -i :3000

# Kill the process
kill -9 <PID>
```

**npm installation issues:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Pre-commit hooks not running:**

```bash
# Reinstall hooks
pre-commit clean
pre-commit install
```

**ESLint issues:**

```bash
# Check ESLint configuration
npx eslint --print-config src/App.jsx

# Run ESLint on specific file
npx eslint src/App.jsx

# Fix auto-fixable ESLint issues
npm run lint:fix
```
