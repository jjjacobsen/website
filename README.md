# Portfolio Website

A modern React portfolio website built with Vite, featuring both development and production Docker workflows.

## 🚀 Development Workflow

### Quick Start (Recommended)
```bash
# Start development server with hot reload
docker compose up dev

# Your app will be available at http://localhost:3000
# Changes to your code will automatically reload!
```

### Alternative Development Commands
```bash
# Build and run development container manually
docker build --target development -t portfolio:dev .
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules portfolio:dev
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

## 📝 Commands Reference

```bash
# Development
docker compose up dev              # Start dev server
docker compose down               # Stop all services

# Production Testing  
docker compose up prod            # Test production build locally

# Direct Docker Commands
docker build --target development -t portfolio:dev .    # Build dev image
docker build --target production -t portfolio:prod .    # Build prod image
docker build -t portfolio:latest .                      # Build prod (default)
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
├── src/                    # React source code
├── Dockerfile             # Multi-stage Docker build
├── docker-compose.yml     # Development/production services
├── nginx.conf            # Nginx configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```
