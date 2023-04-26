import Vue from 'vue';
import axios from 'axios';
import { DOCS_URL } from '../constants/constants';

async function getDocs() {
  return await axios
    .get(DOCS_URL)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export default async () => {
  const chiDocs = await getDocs();

  Vue.prototype.$chiDocs = chiDocs;
};
