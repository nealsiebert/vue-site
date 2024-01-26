import _ from 'lodash';
import { 
  ComputedRef,
  ref,
  computed,
  WritableComputedRef,
  Ref,
} from 'vue';
import { Post } from '../../../assets/posts';

export default function createTags(
  posts: Ref<Post[]>,
  pageNumber: WritableComputedRef<number>
): {
  tagFilter: WritableComputedRef<string[] | null>
  tags: ComputedRef<string[]>
} {
  const tags = ref(null as string[] | null);
  return {
    // this is the current filter for tags
    tagFilter: computed({
      get: () => tags.value,
      set: (newValue) => {
        if (_.isEmpty(newValue) || _.isNil(newValue)) {
          // we don't have any tag filters
          tags.value = null;
        } else {
          // if we have tag filters only use the unique lowercased versions
          tags.value = _(newValue).uniq().map((value)=> value.toLowerCase()).value();
        }
        // we changed the sort go to page 1
        pageNumber.value = 0;
      }
    }),
    // get me all the tags
    tags: computed(() => _(posts.value).map((post) => post.tags).flatten().uniq().value()),
  }
}