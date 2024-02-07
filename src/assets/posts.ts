import _ from 'lodash';
import initialCommit from './posts/initialCommit.md?raw';
import startup1 from './posts/startup1.md?raw';
import dogTraining1 from './posts/dogTraining1.md?raw';
import personalSite from './posts/personalSite.md?raw';
import comingSoon from './posts/comingSoon.md?raw';
import roleResponsibilities from './posts/roleResponsibilities.md?raw';
import unitTesting from './posts/unitTesting.md?raw';
import postMetadata, {
  Post,
  stickyTitle,
} from './postMetadata';

export type {
  Post,
}

export {
  stickyTitle,
}

const contentMap: { [key: string]: string | undefined } = {
  initialCommit,
  startup1,
  dogTraining1,
  personalSite,
  comingSoon,
  roleResponsibilities,
  unitTesting,
};


export default function posts(): Post[] {
  return postMetadata().map((post) => {
    const content = contentMap[post.content]
    if (content) {
      return {
        ...post,
        content,
      }
    }
    throw new Error('Unknown content');
  });
}
