# Setup

-   Clone this repo
-   Install plugins to local.recovery.org (see WP Plugins below)
    -   acf-to-rest-api
-   Configure post types to be fetchable through WP API (see Custom Post Type Fetching below)
-   `npm run dev`

## URLs

-   master branch - http://recovery-org-spa.us-west-2.elasticbeanstalk.com/
-   dev branch - http://recovery-org-spa-dev.us-west-2.elasticbeanstalk.com/

## buildspec.yml docs

https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html

## AWS Deployment Workflow

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
-   https://infinum.co/the-capsized-eight/the-ups-and-downs-of-creating-a-decoupled-wordpress (WP REST Optimizations)

## WP Plugins

-   Query API for pre-set content (without knowing post type)
    -   https://github.com/elevati/wp-api-multiple-posttype
-   Access advanced custom fields from API
    -   https://wordpress.org/plugins/acf-to-rest-api/
-   Add Yoast SEO to API
    -   https://wordpress.org/plugins/wp-api-yoast-meta/

# Express route matching

-   https://expressjs.com/en/guide/routing.html

# Notes

## Custom post type fetching from WP API

-   html/wp-content/plugins/articles-post-type/includes/add_custom_post_types.inc.php

-   html/wp-content/mu-plugins/states-post-type/includes/add_custom_post_types.php

-   html/wp-content/plugins/pro-post-type/includes/add_custom_post_types.inc.php

-   html/wp-content/mu-plugins/city-post-type/includes/add_custom_post_types.php

### Example configuration

```php
<?php

add_action('init', 'articles_custom_posts', 0);

function articles_custom_posts() {

    // Articles
    register_post_type(POSTTYPE_ARTICLES, array(
        'label' => __('Articles'),
        'labels' => array(
            'add_new_item' => __('Add New Article'),
            'edit_item' => __('Edit Article'),
            'view_item' => __('View Article'),
        ),
        'singular_label' => __('Article'),
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'page',
        'hierarchical' => true,
        'rewrite' => array('slug' => SLUG_ARTICLES),
        'supports' => array('title', 'editor', 'revisions', 'post-formats', 'page-attributes', 'thumbnail', 'author', 'excerpt'),
        'menu_position' => 4,
		'taxonomies' => array('category'),
		/**
		 * Fields Added
		 */
		'show_in_rest' => true,
		'rest_base' => 'article',
		'rest_controller_class' => 'WP_REST_Posts_Controller'
    ));
}
```

## Needs

Fix docker box so that we can pull updated WP installation for Recovery ( with cities and city custom fields)

City Content - first fetch WP to see if we have post type for city, then get tokenized content in yml files

# Roadmap

-   Install plugins to local.recovery.org (see WP Plugins below)
    -   acf-to-rest-api
-   Configure post types to be fetchable through WP API (see Custom Post Type Fetching above)
