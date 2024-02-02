# Vue-Site
## Intro
This is my personal website, it hosts my blog and links to my personal projects. At the time of writing I did not have any experience with vue and was looking to experiment. This is a pretty straight forward site build with vite, vue, and vuetify. There are a couple of "nice" feature, besides the standard blog stuff of filtering and sorting you can also land on the blog page and set the search, filter, and selected post by query param. This lets my have several places where clicking on cards lands you on the blog with specific content pre-selected for you.
## Running
There are npm scripts to run and build using vite, ```npm run dev``` will start the dev server and ```npm run build``` will generate a production build.
## Testing
At this time there are no tests, this is a small static site that only I will ever work on. I may explore testing with vitest and vue in the future, but I don't see a lot of value in regression tests at this point.
## Deploying
This site is deployed by hand to a s3 bucket, which is used as the basis for a cloudfront distribution. I may explore automated deployments, probably using github actions in the future. I would like to be able to just push to this repo and have new blog posts go out.
## TODO
1. Add RSS feed
1. Deploy automatically
1. Add a table of contents to each post
1. Figure out a way to crawl the site and make sure every link is live