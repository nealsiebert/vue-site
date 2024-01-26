import _ from 'lodash';
import initialCommit from './posts/initialCommit.md?raw';
import startup1 from './posts/startup1.md?raw';
import dogTraining1 from './posts/dogTraining1.md?raw';
import personalSite1 from './posts/personalSite1.md?raw';

// the stick post when you visit the blog page
export const stickyTitle = 'initial commit';
// series
export const startupSeries = 'bootstrap startup';
export const dogTrainingSeries = 'dog training app';
export const personalSiteSeries = 'personal site';
// tags
export const leadership = 'leadership';
export const engineering = 'engineering';
export const product = 'product';

export type Post = {
  title: string
  date: string
  content: string
  tags: string[]
  series?: string
}

export default function posts(): Post[] {
  const posts= [{
    title: stickyTitle,
    date: new Date(Date.UTC(2024,0,18)).toDateString(),
    content: initialCommit,
    tags: [],
  }, {
    title: 'I need a website',
    date: new Date(Date.UTC(2024,0,25)).toDateString(),
    content: personalSite1,
    tags: [engineering],
    series: personalSiteSeries,
  },{
    title: 'Lessons from a startup',
    date: new Date(Date.UTC(2024,0,25)).toDateString(),
    content: startup1,
    tags: [leadership, product],
    series: startupSeries,
  }, {
    title: 'My dog needs help',
    date: new Date(Date.UTC(2024,0,25)).toDateString(),
    content: dogTraining1,
    tags: [product],
    series: dogTrainingSeries,
  }];
  return posts;
}
