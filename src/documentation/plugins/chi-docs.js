import Vue from 'vue';
import axios from 'axios';

async function getDocs() {
  return await axios
    .get(`${process.env.BASE_URL}js/ce/docs.json`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}

export default async () => {
  const chiDocs = await getDocs();

  Vue.prototype.$chiDocs = chiDocs;
};
