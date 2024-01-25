import { 
  ref,
  computed,
  WritableComputedRef,
} from 'vue';
import _ from 'lodash'

export const defaultPageSize = 10;

export default function createPagination(): {
  pageLength: WritableComputedRef<number>
  pageNumber: WritableComputedRef<number>
  nextPage: () => void
  prevPage: () => void
} {
  const pageNum = ref(0);
  const pageNumber = computed({
    get: () => pageNum.value,
    set: (newPageNum) => {
      pageNum.value = Math.max(
        newPageNum,
        0,
      )
    }
  })
  const pageLen = ref(defaultPageSize);
  const pageLength = computed({
    get: () => pageLen.value,
    set: (newSize: number) => {
      pageLen.value = Math.max(newSize, 1);
      pageNumber.value = 0;
    }
  });
 
  function nextPage() {
    pageNumber.value = pageNumber.value + 1;
  }
  function prevPage() {
    pageNumber.value = pageNumber.value - 1;
  }
  return {
    pageLength,
    pageNumber,
    nextPage,
    prevPage,
  }
}