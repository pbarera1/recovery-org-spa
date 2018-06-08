## URLs

master branch: http://recovery-org-spa.us-west-2.elasticbeanstalk.com/
dev branch: http://recovery-org-spa-dev.us-west-2.elasticbeanstalk.com/

## buildspec.yml docs

https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html

## AWS Deployment Workflow

-   Configure Elastic Beanstalk to serve application
-   Configure CodeBuild to read buildspec.yml and run commands
-   Configure CodePipeline to integrate Github updates with CodeBuild

## Elastic Beanstalk Deployment

1.  Create Elastic Beanstalk instance
    -   Important: Use t2.small instance otherwise `npm install` will fail
2.  Create CodeBuild
3.  Configure CodePipeline
