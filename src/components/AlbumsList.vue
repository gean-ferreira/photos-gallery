<template>
  <h1>Álbuns</h1>
  <div v-for="(albums, index) in list" :key="index">
    {{ albums.title }}
  </div>
</template>

<script>
import { getAlbumsList } from "../service/gallery-service";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const list = ref([]);

    onMounted(() => {
      getAlbumsList().then((resp) => {
        list.value = resp
        console.log(resp)
      });
    });

    return { list };
  },
};
</script>

<style>

</style>