# Portfolio Website

A modern React portfolio website built with Vite, featuring both development and production Docker workflows.

## 🚀 Development Workflow

### Prerequisites

#### Node.js Installation

This project requires Node.js. Install it using Homebrew:

```bash
# Install Node.js (includes npm)
brew install node

# Verify installation
node --version
npm --version
```

#### Package Management

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

**Important:** Always commit both `package.json` and `package-lock.json` when dependencies change. The `package-lock.json` file ensures consistent dependency versions across environments.

#### Pre-commit Hooks Setup

This project uses pre-commit hooks to ensure code quality and consistency.

**Installation:**

```bash
# Install pipx (if not already installed)
brew install pipx

# Install pre-commit
pipx install pre-commit

# Install the pre-commit hooks
pre-commit install

# (Optional) Run pre-commit on all files to test setup
pre-commit run --all-files
```

The pre-commit hooks will automatically run on each commit and check for:

- Code formatting (Prettier)
- JavaScript/React linting (ESLint)
- JSON/YAML validation
- Dockerfile linting
- Security issues (private keys)
- File consistency (trailing whitespace, line endings)

### Quick Start (Recommended)

```bash
# Start development server with hot reload
docker compose up dev

# Your app will be available at http://localhost:3000
# Changes to your code will automatically reload!
```

## 🏭 Production Workflow

### Local Production Testing

```bash
# Build and test production build locally
docker compose up prod --build
# Available at http://localhost:8080
```

### Production Deployment

```bash
# Build production image (defaults to production target)
docker build -t portfolio:latest .
docker run -p 80:80 portfolio:latest

# Or explicitly target production
docker build --target production -t portfolio:prod .
```

### Code Quality

```bash
# Run ESLint to check for code issues
npm run lint

# Run ESLint and automatically fix fixable issues
npm run lint:fix

# Run all pre-commit checks manually
pre-commit run --all-files
```

## 🔧 Docker Architecture

This project uses **multi-stage Docker builds** with three targets:

- **`build`**: Compiles the React app for production
- **`development`**: Runs Vite dev server with hot reload
- **`production`**: Serves built app with Nginx

### Key Features

- **Single Dockerfile** - One source of truth for all environments
- **Hot Reload** - Vite development server with instant feedback
- **Bind Mounts** - Local code changes reflected immediately in container
- **Volume Protection** - Container's `node_modules` preserved during development
- **Production Ready** - Optimized Nginx serving for production

### Docker Commands Reference

```bash
# Development
docker compose up dev                    # Start dev server
docker compose up dev --build          # Rebuild and start dev server

# Production
docker compose up prod --build         # Build and start production server
docker compose down                     # Stop all services

# Manual Docker builds
docker build --target development .     # Build dev image only
docker build --target production .      # Build production image only
```

## 🛠 Technology Stack

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Docker** - Containerization
- **Nginx** - Production web server

## 📁 Project Structure

```
website/
├── src/                     # React source code
│   ├── components/          # React components
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/                  # Static assets
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Development/production services
├── nginx.conf              # Nginx configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── eslint.config.js        # ESLint configuration
└── .pre-commit-config.yaml # Code quality hooks
```

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Check what's using the port
lsof -i :3000

# Kill the process
kill -9 <PID>
```

**Docker build issues:**

```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker compose up --build --force-recreate
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
