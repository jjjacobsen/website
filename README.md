# Jonah Jacobsen - Portfolio Website

A modern, responsive personal portfolio website showcasing technical skills, professional projects, and contact information. Built with React and Vite, featuring smooth animations and both development and production Docker workflows.

## ✨ Portfolio Features

- **Hero Section** - Introduction with social media links (GitHub, LinkedIn, Email)
- **About Section** - Professional background and technical skills showcase
- **Projects Portfolio** - Detailed project descriptions with technologies used
- **Contact Information** - Direct contact links and professional information
- **Resume Download** - PDF resume available for download
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **Responsive Design** - Optimized for all device sizes
- **Modern UI** - Clean, professional design with gradient effects

## 🎯 Portfolio Content

This portfolio showcases:

- **Technical Skills**: AI/ML, Python, CI/CD, Docker, Kubernetes, Terraform, Django, AWS
- **Professional Projects**: Including automated CI/CD pipelines, machine learning implementations, and cloud infrastructure
- **Contact Information**: Professional social media and email contact options
- **Downloadable Resume**: PDF resume accessible at `/jonah_jacobsen_resume.pdf`

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
- File consistency (trailing whitespace, line endings)
- Security issues (private keys, merge conflicts)
- Large file detection

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

### Accessing Portfolio Content

Once running, the portfolio will be available with the following endpoints:

- **Main Portfolio**: `http://localhost:3000` (dev) or `http://localhost:8080` (prod)
- **Resume Download**: `http://localhost:3000/jonah_jacobsen_resume.pdf`
- **All Portfolio Sections**: Accessible via smooth scrolling navigation

### Code Quality

```bash
# Run ESLint to check for code issues
npm run lint

# Run ESLint and automatically fix fixable issues
npm run lint:fix

# Run all pre-commit checks manually
pre-commit run --all-files
```

## 🚀 ECR Deployment (AWS)

This project includes Python invoke tasks for building and pushing containers to Amazon ECR.

### Prerequisites for ECR Deployment

```bash
# Install invoke
pipx install invoke

# Install and configure AWS CLI (if not already done)
brew install awscli
aws configure
```

### ECR Deployment Commands

```bash
# Login to Amazon ECR (run this first or when authentication expires)
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 475365909498.dkr.ecr.us-east-2.amazonaws.com

# Build for x86 architecture and push to ECR
inv build-and-push
```

The `build-and-push` task will:

- Build the Docker image for x86 architecture (`linux/amd64`)
- Target the production stage from the multi-stage Dockerfile
- Tag it with your ECR repository URL: `475365909498.dkr.ecr.us-east-2.amazonaws.com/website:latest`
- Push the image to Amazon ECR

## 🔧 Docker Architecture

This project uses **multi-stage Docker builds** with three stages:

- **`build`**: Compiles the React app for production using Vite
- **`development`**: Runs Vite dev server with hot reload for development
- **`production`**: Serves built app with optimized Nginx configuration

### Key Features

- **Single Dockerfile** - One source of truth for all environments
- **Hot Reload** - Vite development server with instant feedback
- **Bind Mounts** - Local code changes reflected immediately in container
- **Volume Protection** - Container's `node_modules` preserved during development
- **Production Ready** - Optimized Nginx serving with gzip compression and static asset caching
- **Resume Serving** - Dedicated PDF handling with proper MIME types and inline display
- **SPA Routing** - Proper fallback handling for single-page application routes

### Docker Commands Reference

```bash
# Development
docker compose up dev                    # Start dev server
docker compose up dev --build            # Rebuild and start dev server

# Production
docker compose up prod --build           # Build and start production server
docker compose down                      # Stop all services

# Manual Docker builds
docker build --target development .      # Build dev image only
docker build --target production .       # Build production image only
```

## 🛠 Technology Stack

- **React 18.2** - UI framework with hooks and modern patterns
- **Vite 7.0** - Fast build tool and development server with HMR
- **Framer Motion 10.16** - Smooth animations and page transitions
- **React Icons 4.12** - Comprehensive icon library (Font Awesome, Simple Icons)
- **Docker** - Multi-stage containerization for development and production
- **Nginx Alpine** - High-performance production web server with caching
- **ESLint 9.32** - Code linting with React-specific rules
- **Prettier** - Code formatting via pre-commit hooks
- **Node.js 18 Alpine** - Runtime environment for development and build

## 📁 Project Structure

```
website/
├── src/                             # React source code
│   ├── components/                  # React components
│   │   ├── Hero.jsx                 # Landing section with intro
│   │   ├── About.jsx                # Skills and background
│   │   ├── Projects.jsx             # Portfolio projects
│   │   ├── Contact.jsx              # Contact information
│   │   └── *.css                    # Component-specific styles
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # Global app styles
│   ├── index.css                    # Global base styles
│   └── main.jsx                     # Application entry point
├── public/                          # Static assets
│   ├── jonah_jacobsen_resume.pdf    # Downloadable resume
│   ├── robots.txt                   # Search engine directives
│   └── sitemap.xml                  # Site structure for SEO
├── Dockerfile                       # Multi-stage Docker build
├── docker-compose.yml               # Development/production services
├── nginx.conf                       # Nginx configuration with PDF handling
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Locked dependency versions
├── eslint.config.js                 # ESLint configuration (flat config)
└── .pre-commit-config.yaml          # Code quality hooks and automation
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
