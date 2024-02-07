import _ from 'lodash';

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
  date: Date
  summary: string
  content: string
  tags: string[]
  series?: string
  hidden?: boolean
}

function UTCDate(year: number, month: number, day: number): Date {
  return new Date(Date.UTC(year, month, day, 0, 0, 0, 0))
}

export default function posts(): Post[] {
  const posts: Post[] = [{
    title: stickyTitle,
    date: UTCDate(2024,0,18),
    content: 'initialCommit',
    summary: 'My first blog post, welcome!',
    tags: [],
  }, {
    title: 'I Need A Website',
    date: UTCDate(2024,0,25),
    content: 'personalSite',
    summary: 'My adventures building a site for myself using Vue.js',
    tags: [engineering, vue, devJournal],
  }, {
    title: 'Engineer Evaluations',
    date: UTCDate(2024,1,2),
    content: 'roleResponsibilities',
    summary: 'Criteria for evaluating engineering competencies',
    tags: [engineering, leadership],
    hidden: true
  }, {
    title: 'The the unit tests are important',
    date: UTCDate(2024,1,2),
    content: 'unitTesting',
    summary: 'A surprising(ish) reason for 100% unit test coverage',
    tags: [engineering, leadership],
    hidden: true
  }, {
    title: 'Lessons from a startup',
    date: UTCDate(2024,0,25),
    content: 'startup1',
    summary: 'First post in the bootstrap startup series',
    tags: [leadership, product],
    series: startupSeries,
    hidden: true
  }, {
    title: 'My dog needs help',
    date: UTCDate(2024,0,25),
    content: 'dogTraining1',
    summary: 'First post in the dog training app series',
    tags: [product],
    series: dogTrainingSeries,
    hidden: true
  }];
  return posts.map((post) => {
    if (post.hidden) {
      return {
        ...post,
        content: 'comingSoon',
      }
    }
    return post;
  });
}
