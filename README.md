# Portfolio Website

A modern React portfolio website built with Vite, featuring both development and production Docker workflows.

## 🚀 Development Workflow

### Prerequisites

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
- Package vulnerabilities (npm audit)

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
# Test production build locally
docker compose up prod
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
├── src/                  # React source code
├── Dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Development/production services
├── nginx.conf            # Nginx configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```
