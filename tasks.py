from invoke import task
import sys


@task
def test(c):
    """
    Run the React component unit tests using Vitest.

    This task:
    1. Runs all unit tests for React components
    2. Shows test coverage and results
    3. Exits with error code if tests fail

    Prerequisites:
    - Node.js and npm must be installed
    - Test dependencies must be installed (npm install)
    """

    print("🧪 Running React component tests...")

    # Run the tests
    test_result = c.run("npm run test:run", pty=True)

    if test_result.exited != 0:
        print("❌ Tests failed!")
        sys.exit(1)

    print("✅ All tests passed!")


@task
def precommit(c):
    """
    Run pre-commit hooks on all files to ensure code quality.

    This task:
    1. Runs all configured pre-commit hooks
    2. Checks code formatting (Prettier)
    3. Validates JavaScript/React code (ESLint)
    4. Checks for security issues and file consistency
    5. Lints Dockerfiles

    Prerequisites:
    - pre-commit must be installed (pipx install pre-commit)
    - pre-commit hooks must be installed (pre-commit install)
    """

    print("🔍 Running pre-commit hooks...")

    # Run pre-commit on all files
    precommit_result = c.run("pre-commit run --all-files", pty=True)

    if precommit_result.exited != 0:
        print("❌ Pre-commit checks failed!")
        sys.exit(1)

    print("✅ All pre-commit checks passed!")


@task
def dev(c):
    """
    Start the development server using Docker Compose.

    This task:
    1. Rebuilds the development Docker container
    2. Starts the development server with hot reloading
    3. Runs in the foreground with live logs

    Prerequisites:
    - Docker and Docker Compose must be installed and running
    """

    print("🚀 Starting development server with Docker Compose...")

    # Start development server with rebuild
    c.run("docker compose up dev --build", pty=True)


@task
def prod(c):
    """
    Start the production server using Docker Compose.

    This task:
    1. Builds the production Docker container
    2. Starts the production server with optimized assets
    3. Runs in the foreground with live logs

    Prerequisites:
    - Docker and Docker Compose must be installed and running
    """

    print("🏭 Starting production server with Docker Compose...")

    # Start production server with rebuild
    c.run("docker compose up prod --build", pty=True)


@task(pre=[precommit, test])
def build_and_push(c):
    """
    Build the Docker container for x86 architecture and push to Amazon ECR.

    This task automatically runs pre-commit checks and tests before building.

    Execution order:
    1. Pre-commit hooks (code quality, formatting, linting)
    2. Unit tests (all React component tests)
    3. Docker build (only if above steps pass)
    4. Push to ECR (only if build succeeds)

    Prerequisites:
    - Node.js and npm must be installed
    - Test dependencies must be installed (npm install)
    - pre-commit must be installed and configured
    - Docker must be installed and running
    - AWS CLI must be configured with appropriate ECR permissions
    - You must be logged into ECR (run: aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 475365909498.dkr.ecr.us-east-2.amazonaws.com)
    """

    ecr_url = "475365909498.dkr.ecr.us-east-2.amazonaws.com/website:latest"

    print("🔨 Building Docker image for x86 architecture...")

    # Build the image for x86 architecture targeting production stage
    build_result = c.run(
        f"docker build --platform linux/amd64 --target production -t {ecr_url} .",
        pty=True
    )

    if build_result.exited != 0:
        print("❌ Docker build failed!")
        sys.exit(1)

    print("✅ Docker build completed successfully!")
    print(f"📤 Pushing image to ECR: {ecr_url}")

    # Push the image to ECR
    push_result = c.run(f"docker push {ecr_url}", pty=True)

    if push_result.exited != 0:
        print("❌ Docker push failed!")
        sys.exit(1)

    print("🎉 Successfully pushed image to Amazon ECR!")
    print(f"📍 Image available at: {ecr_url}")
