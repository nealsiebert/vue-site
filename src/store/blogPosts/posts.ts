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
} from './posts/postsImpl';
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
  pageNumber: WritableComputedRef<number>
): {
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
  } = createTags(sourcePosts, pageNumber);
  const {
    seriesFilter,
    series,
  } = createSeries(sourcePosts, pageNumber);
  // do all the searching and filtering
  const posts = computed(() => computePosts(
    sourcePosts.value,
    sortField.value,
    sortOrder.value,
    searchFilter.value,
    tagFilter.value,
    seriesFilter.value,
  ));
  return {
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