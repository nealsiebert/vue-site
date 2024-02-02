import { 
  ref,
} from 'vue';
import { defineStore } from 'pinia';
import _ from 'lodash';

const pageStore = defineStore('pages', () => {
  const lastPage = ref('/');

  return {
    lastPage
  };
});

export default pageStore;