import _ from 'lodash';
import initialCommit from './posts/initialCommit.md?raw';
import startup1 from './posts/startup1.md?raw';
import dogTraining1 from './posts/dogTraining1.md?raw';
import personalSite from './posts/personalSite.md?raw';
import comingSoon from './posts/comingSoon.md?raw';
import roleResponsibilities from './posts/roleResponsibilities.md?raw';
import unitTesting from './posts/unitTesting.md?raw';

// the stick post when you visit the blog page
export const stickyTitle = 'initial commit';
// series
export const startupSeries = 'bootstrap startup';
export const dogTrainingSeries = 'dog training app';
// tags
export const leadership = 'leadership';
export const engineering = 'engineering';
export const product = 'product';
export const vue = 'vue.js';
export const devJournal = 'dev journal';

export type Post = {
  title: string
  date: string
  summary: string
  content: string
  tags: string[]
  series?: string
  hidden?: boolean
}


export default function posts(): Post[] {
  const posts: Post[] = [{
    title: stickyTitle,
    date: new Date(Date.UTC(2024,0,18)).toDateString(),
    content: initialCommit,
    summary: 'My first blog post, welcome!',
    tags: [],
  }, {
    title: 'I Need A Website',
    date: new Date(Date.UTC(2024,0,25)).toDateString(),
    content: personalSite,
    summary: 'My adventures building a site for myself using Vue.js',
    tags: [engineering, vue, devJournal],
  }, {
    title: 'Engineer Evaluations',
    date: new Date(Date.UTC(2024,1,2)).toDateString(),
    content: roleResponsibilities,
    summary: 'Criteria for evaluating engineering competencies',
    tags: [engineering, leadership],
    hidden: true
  }, {
    title: 'The the unit tests are important',
    date: new Date(Date.UTC(2024,1,2)).toDateString(),
    content: unitTesting,
    summary: 'A surprising(ish) reason for 100% unit test coverage',
    tags: [engineering, leadership],
    hidden: true
  }, {
    title: 'Lessons from a startup',
    date: new Date(Date.UTC(2024,0,25)).toDateString(),
    content: startup1,
    summary: 'First post in the bootstrap startup series',
    tags: [leadership, product],
    series: startupSeries,
    hidden: true
  }, {
    title: 'My dog needs help',
    date: new Date(Date.UTC(2024,0,25)).toDateString(),
    content: dogTraining1,
    summary: 'First post in the dog training app series',
    tags: [product],
    series: dogTrainingSeries,
    hidden: true
  }];
  return posts.map((post) => {
    if (post.hidden) {
      return {
        ...post,
        content: comingSoon,
      }
    }
    return post;
  });
}
