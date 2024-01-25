import { 
  ref,
  computed
} from 'vue';
import { defineStore } from 'pinia';
import _ from 'lodash';
import createPagination, {
  defaultPageSize,
} from './blogPosts/pagination';
import createPosts, {
  Post,
  sortFields,
  sortOrders,
} from './blogPosts/posts';
import createPages from './blogPosts/pages';

export type {
  Post
}

export {
  sortFields,
  sortOrders,
}

const blogPostStore = defineStore('blogPosts', () => {

  // setup pagination
  const {
    pageLength,
    pageNumber,
    nextPage,
    prevPage,
  } = createPagination();

  // set up everything we need for sorting and filtering
  // the list of posts, the posts returned by this function
  // is reactive and will always reflect the sorting and filtering
  const {
    sortField,
    sortOrder,
    searchFilter,
    tagFilter,
    seriesFilter,
    posts,
    tags,
    series,
  } = createPosts(pageNumber);

  // setup pages based on the sorted and filtered
  // list
  const {
    pages,
    page,
    hasPrevPage,
    hasNextPage,
  } = createPages(posts, pageLength, pageNumber);

  // select a post
  const selected = ref(undefined as undefined | Post);
  // export a computed ref we don't want to let
  // people just set this to anything that looks
  // like a post
  const selectedPost = computed(() => selected.value);
  function selectPost(title: string | undefined | null) {
    selected.value = posts.value.find((post) => post.title === title);
  }

  // for the preview on the home page
  const recent = computed(
    () => _(posts.value)
      .sortBy((post) => new Date(post.date))
      .reverse()
      .slice(0, 6)
      .value()
  )

  // make a reset function so on page navigation
  // we can clear everything
  function resetStore() {
    selected.value = undefined;
    pageLength.value = defaultPageSize;
    searchFilter.value = null;
    sortField.value = null;
    sortOrder.value = null;
    tagFilter.value = null;
    seriesFilter.value = null;
  }

  return {
    // filtering and sorting
    sortField,
    sortOrder,
    searchFilter,
    tagFilter,
    seriesFilter,
    tags,
    series,
    // for preview on home page
    recent,
    // pagination
    pageLength,
    pageNumber,
    pages,
    page,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
    // selection
    selectedPost,
    selectPost,
    // cleanup
    resetStore,
  };
});

export default blogPostStore;