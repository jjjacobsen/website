from invoke import task
import sys


@task
def build_and_push(c):
    """
    Build the Docker container for x86 architecture and push to Amazon ECR.

    This task:
    1. Builds the Docker image targeting the production stage for x86 architecture
    2. Tags it with the ECR repository URL
    3. Pushes it to Amazon ECR

    Prerequisites:
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
