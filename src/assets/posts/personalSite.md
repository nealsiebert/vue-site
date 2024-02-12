It's always there, haunting me. "Other links", "more info", "your website" like a bad penny it just keeps turning up. It took me 18 years, but I finally got around to building a website.
### The problem statement
I would like to have a professional website at [www.nealsiebert.com](https://www.nealsiebert.com) that I can put on job applications. Also, I don't have a public [GitHub](https://github.com/nealsiebert/) account, it would be good to be able to demonstrate that I can [code my way out of a paper bag](https://github.com/nealsiebert/vue-site). Finally, I have always wanted to take a shot at blogging.
### Let's make some technical decisions
What is the simplest way I can achieve my requirements?
* It needs to be [HTTPS](https://en.wikipedia.org/wiki/HTTPS)
* It should be a [static site](https://en.wikipedia.org/wiki/Static_web_page)

A little Googling later and, it will cost me $13 to buy the domain through [Route53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) and for the traffic I expect hosting on [CloudFront](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started-cloudfront-overview.html) will fall into the [AWS Free Tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all).
### Make a prototype
I have a plan, but I haven't tested it yet. I need to verify that DNS and hosting work as I expect. At this point in a well run project a simple coming soon site would be deployed. I'll be honest, I didn't do things the right way. I was pretty confident in the AWS portion of this project. The prototype deployment actually happened right after I finished the application bar.\
\
After deploying the site to [S3](https://aws.amazon.com/s3/) for the second time, I got a little surprise in how of CloudFront's edge caching works. I was getting different versions of the site in different browsers. This was repeatable on separate physical devices with different operating systems. Opening the site in Chrome would show an old version of the site and Firefox would show a new one. I ended up disabling caching while the site is in development.
### Do some design
I'm not a designer, in general I do not have a good eye for design. I did a lot of Googling, looked at a bunch of sites. I wasn't getting anywhere. Then my wife suggested that I write down the content I wanted on the site.
1. I need a home page, it should have a picture of me, an intro, what I'm interested in, and my hobbies (which I cut later)
2. There should be a page with details about my career and you should be able to download my resume
3. There should be a blog

Turns out that I needed to learn, again, if you get the information hierarchy right most design gets a lot easier. I had a couple of rough sketches, had decided on [Material Design](https://m3.material.io/), it was time to start building.
### Front end technologies
A big part of what I want to do with my blog is experiment with different technologies. For the past 6 years all of my front end work has been in [React](https://react.dev/) and I wanted to try something new. I ended up setting on [Vue](https://vuejs.org/) because, it's one of the [3 most popular](https://npmtrends.com/@angular/core-vs-react-vs-svelte-vs-vue) JS frameworks and I'm still mad at [Angular](https://angular.io/). [Vuetify](https://vuetifyjs.com) seemed to be a reasonable popular choice and I had heard a ton of good things about [Vite](https://vitejs.dev/).
### The application bar
The first design for the site had an application bar and navigation drawer. When I started factoring out the application bar and navigation drawer into their own components is when I first ran into [2 way data binding](https://vuejs.org/api/built-in-directives.html#v-model) in Vue. [2 way binding](https://angular.io/guide/two-way-binding) was one of my least favorite things about Angular back in the day, but if you're going to Vue you better get used to it.\
\
At this point, I integrated [Font Awesome Icons](https://vuetifyjs.com/en/features/icon-fonts/) for the social links. I gotta say it, the Vuetify docs are a little confusing here. To use both [Material Design](https://fonts.google.com/icons) and [Font Awesome](https://fontawesome.com/search?o=r&m=free) icons you should use the [SVG](https://vuetifyjs.com/en/features/icon-fonts/#mdi-js-svg) icons and add the FontAwesomeIcon component and icon set to Vuetify. See [here](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/main.ts#L71) for an example. That will let you use v-icon which avoids a bunch of weird styling issues.
### Navigation
One thing that I like about Vue, it's opinionated about [state management](https://vuejs.org/guide/scaling-up/state-management.html) and [routing](https://vuejs.org/guide/scaling-up/routing.html). Routing works exactly like you would expect, there were only 2 small snags along the way. First, the default behavior is not to scroll back to the top of the page on navigation. Second, there isn't an easy way to get at the "real" previous page. Both are pretty straightforward to [solve](hhttps://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/main.ts#L40) but for the second you do have to persist some state, you'll see why when we get to the blog implementation.
### Home page
The first draft of the home page was pretty simple. This was my first interaction with Vuetify's [grid system](https://vuetifyjs.com/en/components/grids/), but if you've done any web dev in the past few years you should be pretty familiar. This page came together pretty fast, although there was no Blog preview. I had a section on hobbies that I cut.
### Career page
Also, not a lot to talk about here. This is when I discovered the issues with the different icon sets and moved to SVG icons. I originally had icons on the tldr section and trying to get them to line up correctly using the FontAwesomeIcon just wasn't working. After I converted everything to v-icon it got a lot easier.
### Blog, the basics
The first decision was how to author posts. This is not a long term solution, but to get started I decided to use a Markdown file per post. After a bit of digging, I decided to [bundle](https://vitejs.dev/guide/assets#importing-asset-as-string) the Markdown and render it in the browser using [markdown-it](https://github.com/markdown-it/markdown-it). If you want, go check out the [component](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/RenderMarkdown.vue). You will notice that the other pages on the site also end up using this component as well, it is just easier to keep the text and HTML separate.\
\
At this point, I came to my senses, decided to ditch the Hobbies section, and started working on the blog preview. The first problem I ran into was ... multi-line text truncation. Somehow, in all these years I have never managed to "get" CSS. I mostly just avoid it by using libraries like Veutify or [Bootstrap](https://getbootstrap.com/). So, the solution I came up with to multi-line text truncation was to use [shave](https://github.com/yowainwright/shave). There is Vue 2 [directive](https://github.com/quantity-digital/vue-shave) that I [adapted](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/shave.ts). With that out of the way, I had my [PostPreview](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/PostsPreview.vue) component.\
\
This is where I made a bad decision. I had some ideas about filtering, sorting, etc. and I decided to implement the [PostDisplay](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/PostPage/PostDisplay.vue) based on a query parameter `www.nealsiebert.com/blog?title=I Need A Website` instead of as part of the path `www.nealsiebert.com/blog/Need A Website`. For future reference, if you want your back button to work correctly make things part of the path.
### Blog, filters, etc.
Now we get to probably my favorite part about Vue, the state management. [Reactivity](https://vuejs.org/guide/essentials/reactivity-fundamentals) is good, but combined with [Pinia](https://pinia.vuejs.org/) it is just so much better than [Context](https://react.dev/reference/react/useContext) or [Redux](https://redux.jsorg/). Everything I did with state management just worked:
1. Made a list of blog posts
1. Paginated that list
1. Added filters to that list and the pages just updated!
1. Added a series and tags to the posts and filtered by that
1. Added sorting to the list

There were a couple of bugs in my logic, but nothing like the hoops you jump through in React.
### Bells and whistles
On my home page I wanted to include some links to the blog and have a blog preview. Most of what I needed was accomplished using query parameters when you land on the blog page set the filters. However, this is where the back button issue reared its ugly head. Moving [PostPage](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/PostPage.vue) to be its own route solved that, but because I want the filters to clear when you land on the [BlogPage](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/BlogPage.vue) there is now an issue with viewing a post and returning to the page resetting the filters when it shouldn't. And, that's the story of how I discovered you had to make a new [store](https://github.com/nealsiebert/vue-site/blob/da065288bddb11e23128419fc70b3c851c50ff49/src/store/pages.ts) to correctly get the last page the user was on.
### Final thoughts
Overall, I am pretty happy with how it turned out. It's a straightforward little site, good enough for an engineer's portfolio. I like using Vue. If you have to learn just one, it is obviously React, it's by far the most popular. However, as long as you are using [Single-file components](https://vuejs.org/guide/scaling-up/sfc.html) Vue is pretty readable and definitely has the edge in state management. It is a viable alternative to React.
### Next steps
there are still a few things I want to do:
1. An RSS feed
1. Deploy automatically on merge to main
1. A table of contents and anchor tags
1. Pre merge check that all links are live

I will update this post if / when those happen. 
### Update: 2/12/2024 RSS and Email Subscriptions
I did it, you can subscribe to my newsletter. I am not sure how often it will be updated, but you can get updates when it is. I tried [MailerLite](https://www.mailerlite.com/) as my first attempt, but there was no easy way to get the forms working on the site. Next, I tried [Mailchimp](https://mailchimp.com/) and ran into similar issues. I ended up finding [this help page](https://mailchimp.com/help/host-your-own-signup-forms/), which led me to implementing my own [forms](https://github.com/nealsiebert/vue-site/blob/5051c20e9289e983535e69eeebb514b2e06a2dda/src/SignUpModal.vue).\
\
The [RSS](https://en.wikipedia.org/wiki/RSS) feed was much more straightforward. I implemented a [build step](https://github.com/nealsiebert/vue-site/blob/5051c20e9289e983535e69eeebb514b2e06a2dda/src/rssFeed.ts) that uses the list of posts from the site to create the new feed.xml file.