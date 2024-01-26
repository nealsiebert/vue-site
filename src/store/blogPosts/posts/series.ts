import _ from 'lodash';
import { 
  ComputedRef,
  ref,
  computed,
  WritableComputedRef,
  Ref,
} from 'vue';
import { Post } from '../../../assets/posts';

export default function createSeries(
  posts: Ref<Post[]>,
  pageNumber: WritableComputedRef<number>
): {
  seriesFilter: WritableComputedRef<string[] | null>
  series: ComputedRef<string[]>
} {
  const series = ref(null as string[] | null);
  return {
    seriesFilter: computed({
      get: () => series.value,
      set: (newValue) => {
        if (_.isEmpty(newValue) || _.isNil(newValue)) {
          // no series sort
          series.value = null;
        } else {
          // always use unique lowercased versions
          series.value = _(newValue).uniq().map((value)=> value.toLowerCase()).value();
        }
        // changed sort go to page 1
        pageNumber.value = 0;
      }
    }),
    // this is all the possible series filters
    series: computed(
      () => _(posts.value).map((post) => post.series).uniq().filter(_.negate(_.isNil)).value() as string[]
    )
  }
}
