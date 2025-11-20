from invoke import task
import sys


@task
def precommit(c):
    """Run pre-commit hooks on all files."""

    print("🔍 Running pre-commit hooks...")

    # Run pre-commit on all files
    precommit_result = c.run("pre-commit run --all-files", pty=True)

    if precommit_result.exited != 0:
        print("❌ Pre-commit checks failed!")
        sys.exit(1)

    print("✅ All pre-commit checks passed!")


@task
def dev(c):
    """Start the development server using Docker Compose."""

    print("🚀 Starting development server with Docker Compose...")

    # Start development server with rebuild
    c.run("docker compose up dev --build", pty=True)


@task
def prod(c):
    """Start the production server using Docker Compose."""

    print("🏭 Starting production server with Docker Compose...")

    # Start production server with rebuild
    c.run("docker compose up prod --build", pty=True)


@task(pre=[precommit])
def build_and_push(c):
    """Build the Docker container for x86 and push to Amazon ECR."""

    ecr_url = "475365909498.dkr.ecr.us-east-2.amazonaws.com/website:latest"
    ecr_registry = "475365909498.dkr.ecr.us-east-2.amazonaws.com"
    aws_region = "us-east-2"

    # Authenticate with ECR before building and pushing
    print("🔐 Authenticating with Amazon ECR...")
    login_result = c.run(
        f"aws ecr get-login-password --region {aws_region} | docker login --username AWS --password-stdin {ecr_registry}",
        pty=True
    )

    if login_result.exited != 0:
        print("❌ ECR authentication failed!")
        sys.exit(1)

    print("✅ ECR authentication successful!")
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
