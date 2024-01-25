import _ from 'lodash';
import { 
  ComputedRef,
  ref,
  computed,
  WritableComputedRef,
  Ref,
} from 'vue';
import { Post } from './postsImpl';

export default function createTags(
  posts: Ref<Post[]>,
  pageNumber: WritableComputedRef<number>
): {
  tagFilter: WritableComputedRef<string[] | null>
  tags: ComputedRef<string[]>
} {
  const tags = ref(null as string[] | null);
  return {
    tagFilter: computed({
      get: () => tags.value,
      set: (newValue) => {
        if (_.isEmpty(newValue) || _.isNil(newValue)) {
          tags.value = null;
        } else {
          tags.value = _(newValue).uniq().map((value)=> value.toLowerCase()).value();
        }
        pageNumber.value = 0;
      }
    }),
    tags: computed(() => _(posts.value).map((post) => post.tags).flatten().uniq().value()),
  }
}