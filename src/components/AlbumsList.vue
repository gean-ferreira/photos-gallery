<template>
  <h1>Álbuns</h1>
  <div class="div-albums" v-for="(albums, index) in list" :key="index" @click="getAlbumId(albums.id)">
    {{ albums.title }}
  </div>
</template>

<script>
import { getAlbumsList } from "../service/gallery-service";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router'

export default {
  setup() {
    const list = ref([]);
    const router = useRouter();

    onMounted(() => {
      getAlbumsList().then((resp) => {
        list.value = resp
      });
    });

    const getAlbumId = id => router.push({ name:"photos", params:{id} });

    return { list, getAlbumId };
  },
};
</script>

<style>
  .div-albums{
    cursor: pointer;
  }
</style>