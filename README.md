# buildspec.yml docs

https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html

# AWS Flow

-   Configure Elastic Beanstalk to serve application
-   Configure CodeBuild to read buildspec.yml and run commands
-   Configure CodePipeline to integrate Github updates with CodeBuild

# Deployment

-   Push to Github
-   AWS CodeBuild reads buildspec.yml for pre-install/install commands
-   AWS CodePipeline deploy to Elastic Beanstalk
