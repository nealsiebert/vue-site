import _ from 'lodash';
import {
  stickyTitle,
  Post,
} from '../posts';
import {
  SortField,
  SortOrder,
  defaultSortField,
} from  './sort'

export type {
  Post
}

function filterPosts(
  posts: Post[],
  filter: string | null
): Post[] {
  if (filter) {
    const search = filter.toLowerCase();
    // just a simple substring search maybe look into doing something more interesting
    return posts.filter((post) => post.content.toLowerCase().includes(search) || post.title.toLowerCase().includes(search))
  }
  return posts;
}

function filterTagsPosts(
  posts: Post[],
  tags: string[] | null,
): Post[] {
  if (tags) {
    const search = tags.map((tag) => tag.toLowerCase());
    return posts.filter((post) => post.tags.map((tag) => tag.toLowerCase()).find((tag) => search.includes(tag)) !== undefined)
  }
  return posts;
}

function filterSeriesPosts(
  posts: Post[],
  series: string[] | null,
): Post[] {
  if (series) {
    const search = series.map((ser) => ser.toLowerCase());
    return posts.filter((post) => post.series && search.includes(post.series));
  }
  return posts;
}

function sortByField(
  posts: Post[],
  sortField: SortField | null,
): Post[] {
  const sortFieldImpl = _.defaultTo(sortField, defaultSortField);
  if (sortFieldImpl === 'date') {
    // we need a special date sort because
    // lexical ordering of the string dates
    // is not correct
    return _.sortBy(posts, (post) => post.date)
  }
  return _.sortBy(posts, sortFieldImpl)
}

function addSticky(
  posts: Post[],
  sortField: SortField | null,
  sortOrder: SortOrder | null,
  filter: string | null,
  tags: string[] | null,
  series: string[] | null
): Post[] {
  if (sortField === null && sortOrder === null && filter === null && tags === null && series === null) {
    // if we have no sorts or filters find the sticky post and move
    // it to the front of the list
    const index = posts.findIndex((post) => post.title === stickyTitle);
    if (index >= 0) {
      const stickyPost = posts[index];
      const pre = posts.slice(0, index);
      const post = posts.slice(index + 1);
      return [
        stickyPost,
        ...pre,
        ...post,
      ]
    }
    return posts;
  
  }
  return posts;
}

function sort(
  posts: Post[],
  sortField: SortField | null,
  sortOrder: SortOrder | null,
): Post[] {
  const sorted = sortByField(posts, sortField);
  if (sortOrder === 'desc' || sortOrder === null) {
    return sorted.reverse();
  }
  return sorted;
}

// we need to do all the filtering
// and sorting, then we check if there 
// is a sort or filter and if not we 
// add the sticky post to the front of
// the list 
export default function getPosts(
  posts: Post[],
  sortField: SortField | null,
  sortOrder: SortOrder | null,
  filter: string | null,
  tags: string[] | null,
  series: string[] | null
): Post[] {
  const filteredAndSorted = addSticky(
    sort(
      filterSeriesPosts(
        filterTagsPosts(
          filterPosts(posts, filter),
          tags,
        ),
        series
      ),
      sortField,
      sortOrder,
    ),
    sortField,
    sortOrder,
    filter,
    tags,
    series,
  );
  return filteredAndSorted.filter((post) => !post.hidden);
}