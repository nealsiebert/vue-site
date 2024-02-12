import { 
  computed,
  ref,
} from 'vue';
import { defineStore } from 'pinia';
import _ from 'lodash';

const pageStore = defineStore('mailchimp', () => {
  const emailBase = ref('');
  const validBase = ref(false);
  const loadingBase = ref(false);
  const email = computed({
    get: () => emailBase.value,
    set: (newEmail) => {
      console.log(newEmail);
      validBase.value = /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(newEmail);
      emailBase.value = newEmail;
    }
  });
  const valid = computed(() => validBase.value);
  const loading = computed(() => loadingBase.value);
  const dialogModel = ref(false)
  async function subscribe() {
    if (validBase.value && !loadingBase.value) {
      loadingBase.value = true;
      try {
        const formData = new FormData();
        formData.append('u', '22c4b7ad434feeb43c3a16631');
        formData.append('id', '0f470c9e43');
        formData.append('MERGE0', email.value);
        await fetch(
          'https://nealsiebert.us21.list-manage.com/subscribe/post',
          {
            method: 'POST',
            body: formData,
          }
        );
      } catch(ex) {
        // for some reason cors hates us
      } finally {
        loadingBase.value = false;
        emailBase.value = '';
        dialogModel.value = false;
      }
    }
  }

  return {
    email,
    valid,
    loading,
    dialogModel,
    subscribe,
  };
});

export default pageStore;