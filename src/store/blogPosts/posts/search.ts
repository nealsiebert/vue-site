import { 
  ref,
  computed,
  WritableComputedRef
} from 'vue';
import _ from 'lodash';

export default function createSearch(
  pageNumber: WritableComputedRef<number>
): {
  searchFilter: WritableComputedRef<string | null>,
} {
  const search = ref(null as string | null);
  return {
    searchFilter: computed({
      get: () => search.value,
      set: (searchFilter) => {
        if (_.isEmpty(searchFilter) || _.isNil(searchFilter)) {
          search.value = null;
        } else {
          search.value = searchFilter;
        }
        pageNumber.value = 0;
      }
    }),
  }
}