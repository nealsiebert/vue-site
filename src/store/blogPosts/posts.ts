import _ from 'lodash';
import { 
  ComputedRef,
  ref,
  computed,
  WritableComputedRef,
} from 'vue';
import postsImpl, {
  stickyTitle,
  Post
} from '../../assets/posts';
import createSort, { 
  SortField,
  SortOrder,
  sortFields,
  sortOrders,
} from './posts/sort';
import createSearch from './posts/search';
import computePosts from './posts/computePosts';
import createTags from './posts/tags';
import createSeries from './posts/series';

export type {
  Post,
  SortField,
  SortOrder,
}

export {
  stickyTitle,
  sortFields,
  sortOrders,
}

export default function createPosts(
  // we need this so whenever a sort is changed
  // we can go back to page 1
  pageNumber: WritableComputedRef<number>
): {
  allPosts: ComputedRef<Post[]>
  sortField: WritableComputedRef<SortField | null>
  sortOrder: WritableComputedRef<SortOrder | null>
  searchFilter: WritableComputedRef<string | null>
  tagFilter: WritableComputedRef<string[] | null>
  seriesFilter: WritableComputedRef<string[] | null>
  posts: ComputedRef<Post[]>
  tags: ComputedRef<string[]>
  series: ComputedRef<string[]>
} {
  // this is the base reference for all blog posts
  // for now this is just a static list, I haven't
  // made a server yet so this is just a list of
  // markdown files
  const sourcePosts = ref(postsImpl());
  const allPosts = computed(() => sourcePosts.value);
  const availablePosts = computed(() => allPosts.value.filter((post)=> !post.hidden))
  // setup an the reactive types that
  // the posts list relies on
  const {
    sortField,
    sortOrder,
  } = createSort(pageNumber);
  const {
    searchFilter,
  } = createSearch(pageNumber);
  const {
    tagFilter,
    tags,
  } = createTags(availablePosts, pageNumber);
  const {
    seriesFilter,
    series,
  } = createSeries(availablePosts, pageNumber);
  // do all the searching and filtering
  const posts = computed(() => computePosts(
    availablePosts.value,
    sortField.value,
    sortOrder.value,
    searchFilter.value,
    tagFilter.value,
    seriesFilter.value,
  ));
  return {
    allPosts,
    sortField,
    sortOrder,
    searchFilter,
    tagFilter,
    seriesFilter,
    posts,
    tags,
    series,
  }
}