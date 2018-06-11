## URLs

-   master branch - http://recovery-org-spa.us-west-2.elasticbeanstalk.com/
-   dev branch - http://recovery-org-spa-dev.us-west-2.elasticbeanstalk.com/

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

## Routing

-   For the initial page load, getInitialProps will execute on the server only. getInitialProps will only be executed on the client when navigating to a different route via the Link component or using the routing APIs. https://github.com/zeit/next.js#fetching-data-and-component-lifecycle
-   getInitialProps can not be used in children components. Only in pages

## WP + React Resources

-   https://medium.com/@proposalpaul/next-js-3-0-headless-wordpress-in-production-a-deep-review-e9758d29c212
-   https://trackchanges.postlight.com/introducing-postlights-wordpress-react-starter-kit-a61e2633c48c
-   https://nextjs.org/learn/

## WP Plugins

-   Query API for pre-set content (without knowing post type)
    -   https://github.com/elevati/wp-api-multiple-posttype
-   Access advanced custom fields from API
    -   https://wordpress.org/plugins/acf-to-rest-api/
-   Add Yoast SEO to API
    -   https://wordpress.org/plugins/wp-api-yoast-meta/
