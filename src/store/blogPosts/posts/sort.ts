import { 
  ref,
  computed,
  WritableComputedRef
} from 'vue';

export const TITLE = 'title';
export const DATE = 'date';
export const ASC = 'asc';
export const DESC = 'desc';
export type SortField = typeof TITLE | typeof DATE;
export const sortFields: SortField[] = [TITLE, DATE];
export type SortOrder = typeof ASC | typeof DESC;
export const sortOrders: SortOrder[] = [ASC, DESC]
export const defaultSortField = 'date';

export default function createSort(
  pageNumber: WritableComputedRef<number>
): {
  sortField: WritableComputedRef<SortField | null>,
  sortOrder: WritableComputedRef<SortOrder | null>,
} {
  const field = ref(null as SortField | null);
  const order = ref(null as SortOrder | null);
  return {
    sortField: computed({
      get: () => field.value,
      set: (sortField) => {
        field.value = sortField;
        pageNumber.value = 0;
      }
    }),
    sortOrder: computed({
      get: ()=> order.value,
      set: (sortOrder) => {
        order.value = sortOrder;
        pageNumber.value = 0;
      }
    })
  }
}