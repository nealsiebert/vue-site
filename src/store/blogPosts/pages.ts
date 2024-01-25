import { 
  computed,
  ComputedRef,
  WritableComputedRef,
} from 'vue';
import _ from 'lodash'
import {
  Post,
} from './posts'

export const defaultPageSize = 10;

export default function createPages(
  posts: ComputedRef<Post[]>,
  pageLength: WritableComputedRef<number>,
  pageNumber: WritableComputedRef<number>,
): {
  pages: ComputedRef<Post[][]>
  page: ComputedRef<Post[]>
  hasPrevPage: ComputedRef<boolean>
  hasNextPage: ComputedRef<boolean>
} {
  const pages = computed(() => {
    const chunked = _.chunk(posts.value, pageLength.value);
    return chunked;
  });
  const page = computed(() => {
    const pageIndex = Math.min(pageNumber.value, pages.value.length - 1);
    return _.defaultTo(pages.value[pageIndex], [])
  });
  const hasPrevPage = computed(() => pageNumber.value > 0);
  const hasNextPage = computed(() => pageNumber.value < pages.value.length - 1);
  return {
    pages,
    page,
    hasPrevPage,
    hasNextPage,
  }
}